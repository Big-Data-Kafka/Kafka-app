import OverviewCard from "./overviewCard";
import {
  EyeIcon,
  ShoppingCartIcon,
  XCircleIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";

const OverviewCards = ({data}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-30">
      <OverviewCard Icon= {<EyeIcon className="h-6 w-6 text-blue-500"/>} count= {data.views} label= "Total views" color={'bg-blue-100'}/>
      <OverviewCard Icon= {<ShoppingCartIcon className="h-6 w-6 text-green-500"/>} count= {data.purchases} label= "Total purchases" color={'bg-green-100'}/>
      <OverviewCard Icon= {<XCircleIcon className="h-6 w-6 text-red-500"/>} count= {data.abandonments} label= "Total abandonments" color={'bg-red-100'}/>
      <OverviewCard Icon= {<ArrowTrendingUpIcon className="h-6 w-6 text-purple-500"/>} count= {Math.floor(100*data.purchases/data.views)} label= "Conversion rate" color={'bg-purple-100'} />
      <OverviewCard Icon= {<ArrowTrendingDownIcon className="h-6 w-6 text-yellow-500"/>} count= {Math.floor(100*data.abandonments/data.views)} label= "Abandonment rate" color={'bg-yellow-100'} />
    </div>
  );
};

export default OverviewCards;
