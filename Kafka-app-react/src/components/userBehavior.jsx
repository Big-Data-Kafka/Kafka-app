import React, { useState, useEffect, useContext } from "react";
import { FilterContext } from "../pages/Dashboard";
const UserBehavior = ({data}) => {
  const { tosearch } = useContext(FilterContext);
  const filtered = data.filter((eachData) => {
    const target = eachData.username.toLowerCase();
    return target.includes(tosearch.toLowerCase());
  });
  return (
    <table className="w-full text-sm text-left bg-white rounded-lg mt-5">
      <thead className="bg-gray-100 text-gray-500">
        <tr>
          <th className="px-6 py-3">Username</th>
          <th className="px-6 py-3">Views</th>
          <th className="px-6 py-3">Purchases</th>
          <th className="px-6 py-3">Abandonments</th>
          <th className="px-6 py-3">Most viewed item</th>
          <th className="px-6 py-3">Most purchased item</th>
        </tr>
      </thead>
      <tbody>
        {filtered.map((eachStat, i) => (
          <tr key={i} className="border-b border-gray-500 hover:bg-gray-300">
            <th className="px-6 py-3">{eachStat.username}</th>
            <td className="px-6 py-3">{eachStat.views}</td>
            <td className="px-6 py-3">{eachStat.purchases}</td>
            <td className="px-6 py-3">{eachStat.views - eachStat.purchases}</td>
            <td className="px-6 py-3">
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded me-4"
                  src={eachStat.most_view_item.itemImage}
                  alt="Neil image"
                />
                <span>{eachStat.most_view_item.itemName}</span>
              </div>
            </td>
            <td className="px-6 py-3">
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded me-4"
                  src={eachStat.most_purchase_item.itemImage}
                  alt="Neil image"
                />
                <span>{eachStat.most_purchase_item.itemName}</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserBehavior;
