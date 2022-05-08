import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useItemDetailsHooks from "../../Hooks/useItemDetailsHooks";

const ItemDetails = () => {
  const itemsId = useParams();
  console.log(itemsId);
  const { id } = itemsId;

  console.log(id);
  const [items] = useItemDetailsHooks();

  // const url = `http://localhost:3005${window.location.pathname}`;
  const { _id, DeliverdQuantiy, StockQuantity, description, img, name, price } =
    items;

  console.log(window.location.pathname);

  console.log(typeof DeliverdQuantiy);

  const delivedq = parseInt(DeliverdQuantiy);

  console.log(delivedq);

  const [stock, setStock] = useState(0);

  console.log(stock);

  const [deliverdQuantity, setdeliverdQuantity] = useState(0);

  console.log(deliverdQuantity);
  console.log(items);

  const handleDeliverd = async () => {
    setdeliverdQuantity(deliverdQuantity + 1);
    setStock(stock - 1);
    console.log(deliverdQuantity, stock);

    if (StockQuantity + stock < 0) {
      toast.error("Stock finished restock items");
      return;
    }

    if (
      StockQuantity + stock < deliverdQuantity + DeliverdQuantiy &&
      StockQuantity + stock <= 10
    ) {
      toast.error(" please stock items");
    }

    const url = `http://localhost:3005/inventory/${id}`;
    const data = {
      DeliverdQuantiy: +DeliverdQuantiy + deliverdQuantity,
      StockQuantity: +StockQuantity + stock,
    };
    fetch(url, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setdeliverdQuantity(deliverdQuantity + 1);
        setStock(stock - 1);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // console.log(JSON.stringify(data));

  // console.log(data);
  console.log(+deliverdQuantity + DeliverdQuantiy, +StockQuantity + stock);
  return (
    <div className="bg-orange-200 p-10">
      <div className="transform bg-yellow-300  hover:-translate-y-3 to-hover hover:bg-green-800 text-center secondary-bg transition duration-300 rounded w-1/2 shadow-lg mx-auto p-4">
        <div>
          <img className="mx-auto py-10   rounded-t" src={img} alt="" />
          <h1 className="px-5 pt-5 text-2xl font-bold hover:text-blue-100">
            NAME :{name}
          </h1>
          <p className="px-5 pt-5">Description : {description}</p>
          <p className="px-5 pt-5">Price :{price}</p>
          <h4 className="px-5 pt-5">Stock:{StockQuantity + stock}</h4>

          <h4 className="px-5 pt-5">
            Deliverd:{DeliverdQuantiy + deliverdQuantity}
          </h4>
        </div>

        <div className="mr-4">
          <button
            onClick={handleDeliverd}
            className=" w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-md hover:bg-orange-800"
          >
            Deliverd Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
