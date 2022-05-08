import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../FirebaseConfig/Firebase.init";
import useItemDetailsHooks from "../../Hooks/useItemDetailsHooks";

const ItemDetails = () => {
  const [user] = useAuthState(auth);

  const itemsId = useParams();
  console.log(itemsId);
  const { id } = itemsId;

  console.log(id);
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

  console.log(deliverdQuantity);
  console.log(items);
  const url = `http://localhost:3005/allorders`;
  const [allorders, setOrders] = useState([]);

  const [it, setIt] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  console.log(user.email);

  console.log(it);
  // allorders.map((item) => setIt(item));

  console.log(!it.name, !!items.name);

  console.log(it.name);

  const d = () => {
    allorders.map((item) => setIt(item));
    console.log(!!it.name === !!items.name);

    console.log(it.name);
  };

  const handleUpdateWithDelivered = (_id) => {
    // console.log(id);
    d();
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

    handleUpdate();
    handleDeliverd();
  };

  const handleUpdate = () => {
    const url = `http://localhost:3005/inventory/${id}`;
    const data = {
      DeliverdQuantiy: +DeliverdQuantiy + deliverdQuantity,
      StockQuantity: +StockQuantity + stock,
    };
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
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleDeliverd = () => {
    setMymyquantity(myquantity + 1);
    if (it.name) {
      const url = `http://localhost:3005/allorders`;
      const data = {
        myquantity: myquantity + 1,
      };
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
          // setdeliverdQuantity(deliverdQuantity + 1);
          // setStock(stock - 1);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      toast.success("quantiyu add");
      return;
    } else {
    }

    const { StockQuantity, description, img, name, price, Supplier } = items;
    const email = user.email;
    console.log({
      StockQuantity: StockQuantity + stock,
      description,
      img,
      name,
      price,
      Supplier,
      myquantity,
      email,
    });

    const url = "http://localhost:3005/order";

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
    // } console.log({ name, price, email }));
  };
  // const handleDeliverd = () => {
  //   setMymyquantity(myquantity + 1);
  //   const { StockQuantity, description, img, name, price, Supplier } = items;
  //   const email = user.email;
  //   console.log({
  //     StockQuantity,
  //     description,
  //     img,
  //     name,
  //     price,
  //     Supplier,
  //     myquantity,
  //     email,
  //   });

  //   console.log(
  //     JSON.stringify({
  //       myquantity,
  //       StockQuantity,
  //       description,
  //       img,
  //       name,
  //       price,
  //       Supplier,
  //       email,
  //     })
  //   );

  //     const url = "http://localhost:5000/addorder";

  //     fetch(url, {
  //       method: "POST",
  //       body: JSON.stringify({    myquantity,
  //         StockQuantity,
  //         description,
  //         img,
  //         name,
  //         price,
  //         Supplier,
  //         email}),
  //       headers: {
  //         authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => toast(data.success));
  //     // } console.log({ name, price, email }));
  //   };
  // };

  // console.log(JSON.stringify(data));

  // console.log(data);
  // console.log(+deliverdQuantity + DeliverdQuantiy, +StockQuantity + stock);
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

        <div className="mr-4">
          <button
            onClick={() => handleUpdateWithDelivered(_id)}
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
