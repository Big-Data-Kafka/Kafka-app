import { db } from "../lib/db";

export const getOverallStatsFn = async () => {
  const views = await db.action.count({ where: { type: "VIEW" } });
  const purchases = await db.action.count({ where: { type: "BUY" } });
  const abandonments = views - purchases;
  return { views, purchases, abandonments };
};

export const getStatsPerProductFn = async () => {
  let statsArray = await getVPByProduct();
  statsArray = statsArray.map((eachStat) => ({
    ...eachStat,
    abandonments: eachStat.views - eachStat.purchases,
  }));
  return statsArray;
};

export const getMostVPFn = async () => {
  const statArray = await getVPByProduct();
  const mv = [...statArray].sort((a, b) => b.views - a.views).slice(0, 2);
  const mp = [...statArray].sort((a, b) => b.purchases - a.purchases).slice(0, 2);
  return { mvp: mv, mpp: mp };
};

export const getUserStatsFn = async () => {
  const actions = await db.action.findMany({
    include: { user: true, product: true },
  });

  const statMap = new Map();

  for (const action of actions) {
    const userId = action.userId;

    if (!statMap.has(userId)) {
      statMap.set(userId, {
        name: action.user.username,
        views: 0,
        purchases: 0,
        view_count: new Map(),
        purchase_count: new Map(),
      });
    }

    const userStats = statMap.get(userId);
    const productName = action.product?.name || "No product name";

    if (action.type === "VIEW") {
      userStats.views++;
      const currentViews = userStats.view_count.get(productName) || {
        image: "",
        count: 0,
      };
      userStats.view_count.set(productName, {
        image: action.product.image,
        count: currentViews.count + 1,
      });
    }

    if (action.type === "BUY") {
      userStats.purchases++;
      const currentBuys = userStats.purchase_count.get(productName) || {
        image: "",
        count: 0,
      };
      userStats.purchase_count.set(productName, {
        image: action.product.image,
        count: currentBuys.count + 1,
      });
    }
  }

  const getMostCountedItem = (countMap: any) => {
    let maxCount = -1;
    let itemName = null;
    let itemImage = "";
    for (const [item, { image, count }] of countMap.entries()) {
      if (count > maxCount) {
        maxCount = count;
        itemName = item;
        itemImage = image;
      }
    }
    return { itemName, itemImage };
  };

  const result = [];

  for (const [, stats] of statMap.entries()) {
    result.push({
      username: stats.name,
      views: stats.views,
      purchases: stats.purchases,
      most_view_item:
        getMostCountedItem(stats.view_count) || {
          itemName: "N/a",
          itemImage: "",
        },
      most_purchase_item:
        getMostCountedItem(stats.purchase_count) || {
          itemName: "N/a",
          itemImage: "",
        },
    });
  }

  return result;
};

const getVPByProduct = async () => {
  const actions = await db.action.findMany({
    include: { product: true },
  });

  const statMap = new Map();
  for (const action of actions) {
    const productId = action.productId;
    if (!statMap.has(productId)) {
      statMap.set(productId, {
        name: action.product.name,
        image: action.product.image,
        views: 0,
        purchases: 0,
      });
    }
    if (action.type == "VIEW") statMap.get(productId).views++;
    if (action.type == "BUY") statMap.get(productId).purchases++;
  }

  return Array.from(statMap.values());
};
