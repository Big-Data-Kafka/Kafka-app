import React, { useState, useEffect } from "react";
import MostList from "./mostList";

const MostListContainer = () => {
  const [vp, setVP]= useState({ mvp: [], mpp: [] })
  console.log(vp);
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/mostVP", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        console.log(res.status);
        if (res.ok) {
          setVP(data)
          return;
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchStats();
  }, []);
  return (
    <>
      <MostList label={"Most viewed items"} items= {vp.mvp} />
      <MostList label={"Most purchased items"} items= {vp.mpp} />
    </>
  );
};

export default MostListContainer;
