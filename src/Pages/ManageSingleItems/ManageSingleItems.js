import React from "react";

const ManageSingleItems = (props) => {
  const {
    _id,
    DeliverdQuantiy,
    StockQuantity,
    description,
    img,
    name,
    price,
    Supplier,
  } = props.inventory;

  const { navigateToDeleteItem } = props;
  return (
    <div className="transform bg-yellow-300  hover:-translate-y-3 to-hover hover:bg-green-800 text-center secondary-bg transition duration-300 rounded w-4/5 shadow-lg mx-auto p-6">
      <div>
        <img className="mx-auto py-10   rounded-t" src={img} alt="" />
        <h1 className="px-5 pt-5 text-2xl font-bold hover:text-blue-100">
          NAME :{name}
        </h1>
        {/* <p className="px-5 pt-5">Description : {description}</p> */}
        <p className="px-5 pt-5">price :{price}</p>
        {/* <p className="px-5 pt-5">Supplier:{Supplier}</p> */}
        <h4 className="px-5 pt-5">Stock:{StockQuantity}</h4>

        {/* <h4 className="px-5 pt-5">Deliverd:{DeliverdQuantiy}</h4> */}
      </div>

      <div className="mr-4">
        <button
          onClick={() => navigateToDeleteItem(_id)}
          id="btn"
          className=" w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-md hover:bg-orange-800"
        >
          See more for delete this
        </button>
      </div>
    </div>
  );
};

export default ManageSingleItems;
