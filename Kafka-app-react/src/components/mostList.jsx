import React from "react";

const MostList = ({ label, items }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 mb-3">
      <h5 className="mb-4 text-xl">{label}</h5>
      <div>
        <ul>
          {items.map((item) => (
            <li className="py-3 hover:bg-gray-300 px-3" key={item.name}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="w-12 h-12 rounded me-4"
                    src= {item.image}
                    alt="Neil image"
                  />
                  <span>{item.name}</span>
                </div>
                <div>
                  {
                    label== "Most viewed items"
                    ? <span>{item.views} views</span>
                    : <span>{item.purchases} purchases</span>
                  }
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MostList;
