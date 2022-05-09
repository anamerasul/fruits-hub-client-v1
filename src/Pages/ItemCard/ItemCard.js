import React from "react";
import { useParams } from "react-router-dom";

const ItemCard = (props) => {
  const itemId = useParams();

  const { navigateToDetails, order } = props;

  // console.log(order);

  const {
    _id,
    DeliverdQuantiy,
    myquantity,
    StockQuantity,
    description,
    img,
    name,
    email,
    price,
    Supplier,
  } = order;

  // console.log(props);
  return (
    <div className="shadow-lg bg-yellow-300">
      <img className="mx-auto py-10   rounded-t" src={img} alt="" />
      <h1 className="px-5 pt-5 text-xl font-bold hover:text-blue-100">
        Items name :{name}
      </h1>
      <p className="pt-5">ordering person : {email}</p>
      <button
        onClick={() => navigateToDetails(_id)}
        className=" w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-md hover:bg-orange-800"
      >
        More
      </button>
    </div>
  );
};

export default ItemCard;
