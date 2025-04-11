import React from "react";
import {
  EyeIcon,
  ShoppingCartIcon,
  XCircleIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Product A",
    views: 20,
    purchases: 15,
    abandonments: 5,
  },
  {
    name: "Product B",
    views: 50,
    purchases: 30,
    abandonments: 10,
  },
  {
    name: "Product C",
    views: 80,
    purchases: 60,
    abandonments: 12,
  },
  {
    name: "Product D",
    views: 60,
    purchases: 50,
    abandonments: 8,
  },
  {
    name: "Product E",
    views: 90,
    purchases: 75,
    abandonments: 18,
  },
  {
    name: "Product F",
    views: 70,
    purchases: 40,
    abandonments: 9,
  },
  {
    name: "Product G",
    views: 110,
    purchases: 80,
    abandonments: 14,
  },
];
const items = [1, 2, 3, 4, 5];

const Dashboard = () => {
  return (
    <div className="h-min-screen bg-gray-200">
      <nav className="bg-gray-800 fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center justify-between p-4">
          <a href="/" className="text-2xl font-semibold text-white">
            <span>Trendify</span>
          </a>
          <div className="text-white">
            <button className="bg-black py-2 px-2 rounded hover:cursor-pointer">
              Logout
            </button>
          </div>
        </div>
      </nav>
      <div className="overflow-y-auto px-5">
        {/* overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-30">
          <div className="flex items-center justify-between p-5 bg-white rounded shadow">
            <div className="flex bg-white p-3 rounded-lg">
              <span className="rounded-full bg-blue-100 p-3 me-5">
                <EyeIcon className="h-6 w-6 text-blue-500" />
              </span>
              <div className="flex flex-col">
                <span className="text-xl">20</span>
                <span className="text-sm text-gray-500">Total views</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-5 bg-white rounded shadow">
            <div className="flex bg-white p-3 rounded-lg">
              <span className="rounded-full bg-green-100 p-3 me-5">
                <ShoppingCartIcon className="h-6 w-6 text-green-500" />
              </span>
              <div className="flex flex-col">
                <span className="text-xl">15</span>
                <span className="text-sm text-gray-500">Total purchases</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-5 bg-white rounded shadow">
            <div className="flex bg-white p-3 rounded-lg">
              <span className="rounded-full bg-red-100 p-3 me-5">
                <XCircleIcon className="h-6 w-6 text-red-500" />
              </span>
              <div className="flex flex-col">
                <span className="text-xl">5</span>
                <span className="text-sm text-gray-500">Total abandonment</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-5 bg-white rounded shadow">
            <div className="flex bg-white p-3 rounded-lg">
              <span className="rounded-full bg-emerald-100 p-3 me-5">
                <ArrowTrendingUpIcon className="h-6 w-6 text-emerald-500" />
              </span>
              <div className="flex flex-col">
                <span className="text-xl">30%</span>
                <span className="text-sm text-gray-500">Conversion rate</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-5 bg-white rounded shadow">
            <div className="flex bg-white p-3 rounded-lg">
              <span className="rounded-full bg-orange-100 p-3 me-5">
                <ArrowTrendingDownIcon className="h-6 w-6 text-orange-500" />
              </span>
              <div className="flex flex-col">
                <span className="text-xl">10%</span>
                <span className="text-sm text-gray-500">Abandonment rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* each items */}
        <div className="grid lg:grid-cols-[2fr_1fr] sm:grid-cols-1 mt-10">
          <div className="h-120">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="views" fill="#1E2A47" />
                <Bar dataKey="purchases" fill="#8B1A1A" />
                <Bar dataKey="abandonments" fill="#006400" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <h5 className="mb-4 text-xl">Most viewed items</h5>
              <div>
                <ul>
                  <li className="py-3 hover:bg-gray-300 px-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          className="w-12 h-12 rounded me-4"
                          src="data:image/jpeg;base64,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"
                          alt="Neil image"
                        />
                        <span>Product A</span>
                      </div>
                      <div>
                        <span>56 views</span>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 hover:bg-gray-300 px-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          className="w-12 h-12 rounded me-4"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Air_Jordan_1_Banned.jpg/1200px-Air_Jordan_1_Banned.jpg"
                          alt="Neil image"
                        />
                        <span>Product B</span>
                      </div>
                      <div>
                        <span>35 views</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 mt-3">
              <h5 className="mb-4 text-xl">Most purchased items</h5>
              <div>
                <ul>
                  <li className="py-3 hover:bg-gray-300 px-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          className="w-12 h-12 rounded me-4"
                          src="data:image/jpeg;base64,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"
                          alt="Neil image"
                        />
                        <span>Product A</span>
                      </div>
                      <div>
                        <span>56 purchases</span>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 hover:bg-gray-300 px-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          className="w-12 h-12 rounded me-4"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Air_Jordan_1_Banned.jpg/1200px-Air_Jordan_1_Banned.jpg"
                          alt="Neil image"
                        />
                        <span>Product B</span>
                      </div>
                      <div>
                        <span>35 purchases</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* user Behavior table */}
        <div className="my-5">
          <h5 className="text-2xl mb-4">User behavior table</h5>

          <form className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="search"
                className="block w-full p-4 ps-7 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Search by username..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-gray-800 hover:bg-gray-900 rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>

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
              {items.map((item, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-500 hover:bg-gray-300"
                >
                  <th className="px-6 py-3">user {item}</th>
                  <td className="px-6 py-3">{item}</td>
                  <td className="px-6 py-3">{item}</td>
                  <td className="px-6 py-3">{item}</td>
                  <td className="px-6 py-3">
                    <div className="flex items-center">
                      <img
                        className="w-12 h-12 rounded me-4"
                        src="data:image/jpeg;base64,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"
                        alt="Neil image"
                      />
                      <span>Product A</span>
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <div className="flex items-center">
                      <img
                        className="w-12 h-12 rounded me-4"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Air_Jordan_1_Banned.jpg/1200px-Air_Jordan_1_Banned.jpg"
                        alt="Neil image"
                      />
                      <span>Product B</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
