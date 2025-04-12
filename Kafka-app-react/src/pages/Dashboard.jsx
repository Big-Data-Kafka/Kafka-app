import React from "react";
import AdminNavBar from "../components/adminNavbar";
import OverviewCards from "../components/overviewCards";
import BChart from "../components/bChart";
import MostListContainer from "../components/mostListContainer";
import FilterBox from "../components/filterBox";
import UserBehavior from "../components/userBehavior";

const Dashboard = () => {
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
            <MostListContainer/>
          </div>
        </div>
        {/* user Behavior table */}
        <div className="my-5">
          <h5 className="text-2xl mb-4">User behavior table</h5>
          <FilterBox />
          <UserBehavior />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
