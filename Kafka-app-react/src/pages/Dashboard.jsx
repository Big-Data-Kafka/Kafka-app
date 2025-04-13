import React, { createContext, useState, useEffect } from "react";
import AdminNavBar from "../components/adminNavbar";
import OverviewCards from "../components/overviewCards";
import BChart from "../components/bChart";
import MostListContainer from "../components/mostListContainer";
import FilterBox from "../components/filterBox";
import UserBehavior from "../components/userBehavior";
import { io } from "socket.io-client";
import Loading from "../components/Loading"

export const FilterContext = createContext();
const Dashboard = () => {
  const socket = io("http://localhost:5000");
  const [tosearch, setToSearch]= useState("");
  const [data, setData] = useState(null);
  useEffect(() => {
      socket.on("dashboard-update", (incoming) => {
        setData(incoming);
      });
  
      return () => {
        socket.off("dashboard-update");
      };
    }, []);
  return (
    !data 
    ? <Loading/>
    : <div className="h-min-screen bg-gray-200">
      <AdminNavBar />
      <div className="overflow-y-auto px-5">
        {/* overview */}
        <OverviewCards  data= {data.overall}/>

        {/* each items */}
        <div className="grid lg:grid-cols-[2fr_1fr] sm:grid-cols-1 mt-10">
          <div className="h-120">
            <BChart data= {data.perProduct} />
          </div>
          <div>
            <MostListContainer data={data.mostVP} />
          </div>
        </div>
        {/* user Behavior table */}
        <div className="my-5">
          <h5 className="text-2xl mb-4">User behavior table</h5>
          <FilterContext.Provider value={{tosearch, setToSearch}}>
            <FilterBox />
            <UserBehavior data= {data.userStats}/>
          </FilterContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
