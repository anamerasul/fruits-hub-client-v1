import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";
import Spinner from "../Shared/Spinner/Spinner";

const ManageItems = () => {
  const navigate = useNavigate();
  const [allorders, setOrders] = useState([]);
  useEffect(() => {
    const url = `https://fruitshub-server.onrender.com/allorders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // {allorders.find(orders=>orders._id)}

  const navigateToDetails = (_id) => {
    navigate(`/itemscarddetails/${_id}`);
  };

  return (
    <div>
      <div className="bg-yellow-100 py-4  px-8">
        <h2 className="text-2xl md:text-4xl font-black my-4 ">
          {" "}
          ALL USER ORDERS ITEMS
        </h2>

        {allorders.length === 0 ? (
          <Spinner></Spinner>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6 gap-y-8 container ">
            {allorders.map((order) => (
              <ItemCard
                key={order._id}
                order={order}
                navigateToDetails={navigateToDetails}
              ></ItemCard>
            ))}
            <div className="mr-4"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageItems;
