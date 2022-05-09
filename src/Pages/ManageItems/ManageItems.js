import React, { useEffect, useState } from "react";

const ManageItems = () => {
  const [allorders, setOrders] = useState([]);

  const [it, setIt] = useState({});

  useEffect(() => {
    const url = `http://localhost:3005/allorders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // {allorders.find(orders=>orders._id)}

  return (
    <div>
      {allorders.find((orders) => {
        console.log(orders._id);

        if (orders._id === "627813338a0cfe8d6efd08c0") {
          console.log("update");
        }
      })}
      <h2>ManageItems</h2>
    </div>
  );
};

export default ManageItems;
