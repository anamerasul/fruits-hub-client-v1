import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useInventoryHooks from "../../../Hooks/useInventoryHooks";
import InventoryItems from "./../../InventoryItems/inventoryItems";
const HomeInventory = () => {
  const [inventories, navigateToItemsDetails] = useInventoryHooks([]);

  // const [DeliverdQuantity, setDeliverdQuantity] = useState(0);

  // const navigate = useNavigate();

  // const navigateToServiceDetail = (id) => {
  //   navigate(`/inventory/${id}`);
  // };

  console.log(inventories.length);

  return (
    <div className="bg-yellow-200 py-4">
      <h2 className="text-2xl md:text-4xl font-black my-4">Inventory Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 container ">
        {inventories.slice(0, 6).map((inventory) => (
          <InventoryItems
            navigateToItemsDetails={navigateToItemsDetails}
            key={inventory._id}
            inventory={inventory}
          ></InventoryItems>
        ))}
      </div>
      <div className="my-4 pt-4">
        <Link
          to="/manageinventory"
          className=" w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-md hover:bg-orange-800"
        >
          Manage All
        </Link>
      </div>
    </div>
  );
};

export default HomeInventory;
