import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../FirebaseConfig/Firebase.init";
import useItemDetailsHooks from "../../Hooks/useItemDetailsHooks";

const ItemDetails = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const itemsId = useParams();
  // console.log(itemsId);
  const { id } = itemsId;

  // console.log(id);
  const [items] = useItemDetailsHooks();

  // const url = `http://localhost:3005${window.location.pathname}`;
  const {
    _id,
    DeliverdQuantiy,
    StockQuantity,
    description,
    img,
    name,
    price,
    Supplier,
  } = items;
  const [stock, setStock] = useState(0);

  const [deliverdQuantity, setdeliverdQuantity] = useState(0);

  const [myquantity, setMymyquantity] = useState(1);

  const [allorders, setOrders] = useState([]);

  useEffect(() => {
    const url = `http://localhost:3005/allorders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const [previousorders, setPreviousorders] = useState({});

  useEffect(() => {
    const url = `http://localhost:3005/allorders/${id}`;

    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPreviousorders(data));
  }, []);

  if (previousorders._id === _id) {
  }

  const handleUpdateWithDelivered = (_id) => {
    if (StockQuantity + stock < 1) {
      if (StockQuantity + stock < 1) {
        toast.error("Stock finished restock items");
        return false;
      }

      if (
        StockQuantity + stock < deliverdQuantity + DeliverdQuantiy &&
        StockQuantity + stock <= 10
      ) {
        toast.error(" please stock items");
      }

      return;
    }

    setdeliverdQuantity(deliverdQuantity + 1);
    setStock(stock - 1);

    handleUpdate();
    handleDeliverd(_id);
  };

  const handleUpdate = () => {
    const url = `http://localhost:3005/inventory/${id}`;
    const data = {
      DeliverdQuantiy: +DeliverdQuantiy + deliverdQuantity,
      StockQuantity: +StockQuantity + stock,
    };

    // console.log(JSON.stringify(data));
    fetch(url, {
      method: "PUT", // or 'PUT'
      headers: {
        authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setdeliverdQuantity(deliverdQuantity + 1);
        setStock(stock - 1);
      })
      .catch((error) => {});
  };

  const handleDeliverd = (_id) => {
    if (previousorders._id === items._id) {
      navigate("/magnageitems");
    }
    setMymyquantity(myquantity + 1);

    if (previousorders._id !== items._id && previousorders._id !== id) {
      const { StockQuantity, description, img, name, price, Supplier } = items;
      const email = user.email;
      const url = "http://localhost:3005/orders";

      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          StockQuantity: StockQuantity + stock,
          description,
          img,
          name,
          price,
          Supplier,
          email,
          myquantity,
        }),
        headers: {
          authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => toast(data.success));
    }

    toast.success("product  add");

    // navigate("/magnageitems");
    return;
    //else {
    //   const url = `http://localhost:3005/orders/${id}`;
    //   const data = {
    //     myquantity: myquantity + 1,
    //   };
    //   fetch(url, {
    //     method: "PUT", // or 'PUT'
    //     headers: {
    //       authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   })
    //     .then((response) => response.json())
    //     .then((data) =>
    //       // setdeliverdQuantity(deliverdQuantity + 1);
    //       // setStock(stock - 1);
    //       toast(data.success)
    //     )
    //     .catch((error) => {
    //       console.error("Error:", error);
    //     });
    //   toast.success("quantity add");
    // }

    navigate("/");

    // allorders.find((orders) => {
    //   console.log(orders._id);

    //   if (orders._id === items._id) {
    //     console.log(true);
    //   } else {
    //     console.log(false);
    //   }
    // });

    // if (it.name) {
    //   const url = `http://localhost:3005/allorders`;
    //   const data = {
    //     myquantity: myquantity + 1,
    //   };
    //   fetch(url, {
    //     method: "PUT", // or 'PUT'
    //     headers: {
    //       authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       // setdeliverdQuantity(deliverdQuantity + 1);
    //       // setStock(stock - 1);
    //     })
    //     .catch((error) => {
    //       console.error("Error:", error);
    //     });
    //   toast.success("quantity add");
    //   return;
    // } else {
    // }

    // const { StockQuantity, description, img, name, price, Supplier } = items;
    // const email = user.email;
    // console.log({
    //   _id,
    //   StockQuantity: StockQuantity + stock,
    //   description,
    //   img,
    //   name,
    //   price,
    //   Supplier,
    //   myquantity,
    //   email,
    // });

    // const url = "http://localhost:3005/order";

    // fetch(url, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     _id,
    //     StockQuantity: StockQuantity + stock,
    //     description,
    //     img,
    //     name,
    //     price,
    //     Supplier,
    //     email,
    //     myquantity,
    //   }),
    //   headers: {
    //     authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => toast(data.success));
    // } console.log({ name, price, email }));
  };

  const handleUpdateStockQuantity = (id) => {
    navigate(`/update/${id.id}`);
  };

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
          <p className="px-5 pt-5">Supplier:{Supplier}</p>
          <h4 className="px-5 pt-5">Stock:{StockQuantity + stock}</h4>

          <h4 className="px-5 pt-5">
            Deliverd:{DeliverdQuantiy + deliverdQuantity}
          </h4>
        </div>

        <div className="mr-4"></div>
        <div className="mr-4">
          <button
            onClick={() => handleUpdateWithDelivered(_id)}
            className=" w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-md hover:bg-orange-800"
          >
            Deliverd Items
          </button>
        </div>
        <div className="mr-4">
          <button
            onClick={() => handleUpdateStockQuantity(itemsId)}
            className=" w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-md hover:bg-orange-800"
          >
            update Stock or Delete product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;

// const { name, price } = product;
//     const email = user.email;
//     console.log({ name, price, email });

//     console.log(JSON.stringify({ name, price, email }));

//     const url = "http://localhost:5000/addorder";

//     fetch(url, {
//       method: "POST",
//       body: JSON.stringify({ name, price, email }),
//       headers: {
//         authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => toast(data.success));
//     // } console.log({ name, price, email }));
//   };

// allorders.filter((orders) => {
//   console.log(orders._id);

//   if (orders._id === items._id) {
//     const url = `http://localhost:3005/allorders`;
//     const data = {
//       myquantity: myquantity + 1,
//     };
//     fetch(url, {
//       method: "PUT", // or 'PUT'
//       headers: {
//         authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // setdeliverdQuantity(deliverdQuantity + 1);
//         // setStock(stock - 1);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//     toast.success("quantity add");
//   } else {
//     const { StockQuantity, description, img, name, price, Supplier } = items;
//     const email = user.email;
//     console.log({
//       _id,
//       StockQuantity: StockQuantity + stock,
//       description,
//       img,
//       name,
//       price,
//       Supplier,
//       myquantity,
//       email,
//     });

//     const url = "http://localhost:3005/order";

//     fetch(url, {
//       method: "POST",
//       body: JSON.stringify({
//         _id,
//         StockQuantity: StockQuantity + stock,
//         description,
//         img,
//         name,
//         price,
//         Supplier,
//         email,
//         myquantity,
//       }),
//       headers: {
//         authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => toast(data.success));
//   }
// });
