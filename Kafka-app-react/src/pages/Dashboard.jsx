import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavBar from "../components/adminNavbar";
import OverviewCards from "../components/overviewCards";
import BChart from "../components/bChart";
import MostListContainer from "../components/mostListContainer";
import FilterBox from "../components/filterBox";
import UserBehavior from "../components/userBehavior";

export const FilterContext = createContext();
const Dashboard = () => {
  const [tosearch, setToSearch]= useState("");
  const navigate = useNavigate();
  useEffect(() => {
      const checkAuth = async () => {
        try {
          const res = await fetch("http://localhost:5000/api/check-auth", {
            credentials: "include",
          });
          const data = await res.json();
          if (!res.ok || !data.user.isAdmin) {
            navigate("/");
          }
          return;
        } catch (err) {
          console.log(err);
        }
      };
      checkAuth();
    }, []);
  return (
    <div className="h-min-screen bg-gray-200">
      <AdminNavBar />
      <div className="overflow-y-auto px-5">
        {/* overview */}
        <OverviewCards />

        {/* each items */}
        <div className="grid lg:grid-cols-[2fr_1fr] sm:grid-cols-1 mt-10">
          <div className="h-120">
            <BChart />
          </div>
          <div>
            <MostListContainer />
          </div>
        </div>
        {/* user Behavior table */}
        <div className="my-5">
          <h5 className="text-2xl mb-4">User behavior table</h5>
          <FilterContext.Provider value={{tosearch, setToSearch}}>
            <FilterBox />
            <UserBehavior />
          </FilterContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
