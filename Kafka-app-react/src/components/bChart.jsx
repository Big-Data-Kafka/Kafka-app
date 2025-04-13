import React, { useEffect, useState } from 'react'
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
const BChart = () => {
  const [stats, setStats]= useState([])
  useEffect(()=>{
    const fetchStats= async()=>{
      try{
        const res= await fetch('http://localhost:5000/api/statsPerProduct',
          {
            headers: {
              "Content-Type": "application/json"
            },
          },
        );
        const data= await res.json();
        if(res.ok){
          setStats(data);
          return;
        }
      }catch(err){
        console.log(err);
      }
    }
    fetchStats();
  },[])
  return (
    <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={stats}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" className='text-sm'/>
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