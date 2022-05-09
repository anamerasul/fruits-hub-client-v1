import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../FirebaseConfig/Firebase.init";

const AddItems = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const [deliveredItem, setDeliveredItem] = useState(0);
  const { register, handleSubmit } = useForm();
  const onSubmitInventory = (data) => {
    const url = `https://fruitshub-server.onrender.com/inventory`;

    console.log(+data);

    const {
      DeliverdQuantiy,
      StockQuantity,
      description,
      img,
      name,
      price,
      Supplier,
    } = data;

    const jsonData = {
      DeliverdQuantiy: +DeliverdQuantiy,
      StockQuantity: +StockQuantity,
      description: description,
      img: img,
      name: name,
      price: +price,
      Supplier: Supplier,
    };

    console.log(jsonData);
    fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    toast("product add successFully");
    navigate("/manageinventory");

    console.log(data);
  };

  return (
    <div
      className="bg-yellow-200"
      style={{
        backgroundImage: "url(https://i.ibb.co/4Zbryfc/notfoundpage-1.png)",
        backgroundSize: "80% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center justify-center">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white opacity-2 md:w-1/3 lg:w-1/3 sm:w-1/3">
          <h3 className="text-2xl font-bold text-center">
            ADD PRODUCT TO INVENTORY
          </h3>
          <form onSubmit={handleSubmit(onSubmitInventory)} action="">
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="Name">
                  Name
                </label>

                <input
                  type="text"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="name"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="mt-4">
                <label className="block" htmlFor="description">
                  Description
                </label>

                <textarea
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 "
                  placeholder="description"
                  {...register("description")}
                />
              </div>

              <div>
                <label className="block" htmlFor="Supplier">
                  Supplier
                </label>

                <input
                  type="text"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Supplier"
                  {...register("Supplier", { required: true })}
                />
              </div>
              <div className="mt-4">
                <label className="block">Photo url</label>

                <input
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="photo Url"
                  type="text"
                  {...register("img", { required: true })}
                />
              </div>
              <div className="mt-4">
                <label className="block">Price</label>

                <input
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="price"
                  type="number"
                  {...register("price", { required: true })}
                />
              </div>

              <div className="mt-4">
                <label className="block">Stock Quantity</label>

                <input
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="StockQuantity"
                  type="number"
                  {...register("StockQuantity", { required: true })}
                />
              </div>

              <div className="mt-4 hidden">
                <label className="block">Deliverd Quantiy</label>

                <input
                  value={0}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="DeliverdQuantiy"
                  type="number"
                  {...register("DeliverdQuantiy")}
                />
              </div>
              <div className="flex">
                <input
                  style={{ cursor: "pointer" }}
                  type="submit"
                  className="w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-lg hover:bg-orange-700"
                  value="ADD Inventory"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;

// fetch(url, {
//   method: "POST",
//   body: JSON.stringify({
//     name,
//     price,
//   }),
//   headers: {
//     authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     event.target.reset();
//   });
// event.target.reset();
// };
