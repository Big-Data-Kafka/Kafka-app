import React, { useState, useEffect } from "react";
import OverviewCard from "./overviewCard";
import {
  EyeIcon,
  ShoppingCartIcon,
  XCircleIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";

const OverviewCards = () => {
  const [stats, setStats]= useState({})
  useEffect(()=>{
    const fetchStats = async () => {
			try {
				const res = await fetch(
					`http://localhost:5000/api/overallStats`,
					{
						headers: {
							"Content-Type": "application/json",
						},
					},
				);
				const data = await res.json();

				if (res.ok) {
					setStats(data)
					return;
				}
			} catch (err) {
				console.log(err);
			}
		};
		fetchStats();
  },[])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-30">
      <OverviewCard Icon= {<EyeIcon className="h-6 w-6 text-blue-500"/>} count= {stats.views} label= "Total views" color={'bg-blue-100'}/>
      <OverviewCard Icon= {<ShoppingCartIcon className="h-6 w-6 text-green-500"/>} count= {stats.purchases} label= "Total purchases" color={'bg-green-100'}/>
      <OverviewCard Icon= {<XCircleIcon className="h-6 w-6 text-red-500"/>} count= {stats.abandonments} label= "Total abandonments" color={'bg-red-100'}/>
      <OverviewCard Icon= {<ArrowTrendingUpIcon className="h-6 w-6 text-purple-500"/>} count= {100*stats.purchases/stats.views} label= "Conversion rate" color={'bg-purple-100'} />
      <OverviewCard Icon= {<ArrowTrendingDownIcon className="h-6 w-6 text-yellow-500"/>} count= {100*stats.abandonments/stats.views} label= "Abandonment rate" color={'bg-yellow-100'} />
    </div>
  );
};

export default OverviewCards;
