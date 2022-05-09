import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../FirebaseConfig/Firebase.init";

const DetailsItem = () => {
  const itemsId = useParams();

  const [user] = useAuthState(auth);
  const { id } = itemsId;

  const [items, setitems] = useState({});
  const navigate = useNavigate();
  const url = `https://fruitshub-server.onrender.com/allorders/${id}`;

  console.log(url);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setitems(data);
      });
  }, []);

  // const url = `https://fruitshub-server.onrender.com${window.location.pathname}`;
  const {
    _id,
    StockQuantity,
    description,
    img,
    name,
    price,
    Supplier,
    email,
    myquantity,
  } = items;

  console.log(items);

  const handleDelete = (id) => {
    if (items._id === id) {
      // console.log("delete");

      const proceed = window.confirm("Are you sure?");

      // toast.confirm("sure");

      if (proceed) {
        fetch(url, {
          method: "Delete", // or 'PUT'
          headers: {
            authorization: `${user.email} ${localStorage.getItem(
              "accessToken"
            )}`,
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            //     setnewquantity(newquantity + 1);
          })
          .catch((error) => {
            // console.error("Error:", error);
          });

        toast.success("successfully Delete");
      }

      navigate("/");
    }
  };

  return (
    <div>
      <div className="bg-orange-200 p-10">
        <div className="transform bg-yellow-300  hover:-translate-y-3 to-hover hover:bg-green-800 text-center secondary-bg transition duration-300 rounded w-1/2 shadow-lg mx-auto p-4">
          <div>
            <img className="mx-auto py-10   rounded-t" src={img} alt="" />
            <h1 className="px-5 pt-5 text-2xl font-bold hover:text-blue-100">
              NAME :{name}
            </h1>
            <p className="px-5 pt-5">Description : {description}</p>
            <p className="px-5 pt-5">Price :{price}</p>
            <p className="px-5 pt-5">Supplier:{Supplier}</p>
            <h4 className="px-5 pt-5">Stock:{StockQuantity}</h4>
            <h4 className="px-5 pt-5">orders from:{email}</h4>
            <h4 className="px-5 pt-5">orders quantity:{myquantity}</h4>
          </div>

          <div className="mr-4">
            <div className="mr-4">
              <button
                onClick={() => handleDelete(items._id)}
                className=" w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-md hover:bg-orange-800"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsItem;
