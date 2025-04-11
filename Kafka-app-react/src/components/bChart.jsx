import React from 'react'
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
const data = [ //fetch from DB
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
const BChart = () => {
  return (
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
  )
}

export default BChart