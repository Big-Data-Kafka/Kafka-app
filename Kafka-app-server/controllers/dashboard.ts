import express from "express";
import { db } from "../lib/db";

export const getOverallStats = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const views = await db.action.count({ where: { type: "VIEW" } });
    const purchases = await db.action.count({ where: { type: "BUY" } });
    const abandonments = views - purchases;
    res.status(200).json({
      views,
      purchases,
      abandonments,
    });
  } catch (error) {
    res.status(500).send("Server error");
  }
};

export const getStatsPerProduct = async (
  req: express.Request,
  res: express.Response
) => {
  //join product and action through relation called "product"
  try {
    let statsArray = await getVPByProduct();
    statsArray = statsArray.map((eachStat) => {
      return {
        ...eachStat,
        abandonments: eachStat.views - eachStat.purchases,
      };
    });
    res.status(200).json(statsArray);
  } catch (error) {
    res.status(500).send("server error");
  }
};
export const getMostVP = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    let statArray = await getVPByProduct();
    const mv = [...statArray].sort((a, b) => b.views - a.views).slice(0, 2);
    const mp = [...statArray]
      .sort((a, b) => b.purchases - a.purchases)
      .slice(0, 2);
    res.status(200).json({ mvp: mv, mpp: mp });
  } catch (err) {
    res.status(500).send("server error");
  }
};

const getVPByProduct = async () => {
  const actions = await db.action.findMany({
    include: {
      product: true,
    },
  });
  const statmap = new Map();
  for (const action of actions) {
    const productId = action.productId;
    if (!statmap.has(productId)) {
      statmap.set(productId, {
        name: action.product.name,
        image: action.product.image,
        views: 0,
        purchases: 0,
      });
    }
    if (action.type == "VIEW") statmap.get(productId).views++;
    if (action.type == "BUY") statmap.get(productId).purchases++;
  }
  let statsArray = Array.from(statmap.values());
  getVPByUser();
  return statsArray;
};
type UserStats = {
    username: string;
    views: number;
    purchases: number;
    v_count: Record<string, number>;
    p_count: Record<string, number>;
  };
  
  const getVPByUser = async () => {
    const actions = await db.action.findMany({
      include: {
        user: true,
        product: true,
      },
    });
  
    const statMap = new Map<string, UserStats>();
  
    for (const action of actions) {
      const userId = action.userId;
      const username = action.user?.username;
      const productName = action.product?.name;
  
      if (!userId || !username || !productName) continue;
  
      if (!statMap.has(userId)) {
        statMap.set(userId, {
          username,
          views: 0,
          purchases: 0,
          v_count: {},
          p_count: {},
        });
      }
  
      // Use "as UserStats" to tell TypeScript what type it is
      const userStats = statMap.get(userId) as UserStats;
  
      if (action.type === "VIEW") {
        userStats.views++;
        userStats.v_count[productName] = (userStats.v_count[productName] || 0) + 1;
      }
  
      if (action.type === "BUY") {
        userStats.purchases++;
        userStats.p_count[productName] = (userStats.p_count[productName] || 0) + 1;
      }
    }
  
    const result = Array.from(statMap.values()).map((stats) => {
      const mostViewedItem =
        Object.entries(stats.v_count).sort((a, b) => b[1] - a[1])[0]?.[0] || null;
      const mostPurchasedItem =
        Object.entries(stats.p_count).sort((a, b) => b[1] - a[1])[0]?.[0] || null;
      return {
        username: stats.username,
        views: stats.views,
        purchases: stats.purchases,
        mostViewedItem,
        mostPurchasedItem,
      };
    });
    console.log(result);
    return result
  };
  
  
