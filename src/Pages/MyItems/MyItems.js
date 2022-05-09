import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../FirebaseConfig/Firebase.init";
import ItemCard from "../ItemCard/ItemCard";

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  const [myorders, setMyorders] = useState([]);
  useEffect(() => {
    const url = `http://localhost:3005/orders`;
    fetch(url, {
      headers: {
        authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyorders(data));
  }, [user.email]);

  const navigateToDetails = (_id) => {
    navigate(`/itemscarddetails/${_id}`);
  };
  return (
    <div>
      <div className="bg-yellow-200 py-4  px-8">
        <h2 className="text-2xl md:text-4xl font-black my-4">MY ITEMS</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 gap-6 container ">
          {myorders.map((order) => (
            <ItemCard
              key={order._id}
              order={order}
              navigateToDetails={navigateToDetails}
            ></ItemCard>
          ))}
          <div className="mr-4"></div>
        </div>
      </div>
    </div>
  );
};

export default MyItems;

// import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../Firebase.init";

// const Orders = () => {
//   const [user, loading, error] = useAuthState(auth);

//   const [orderList, setOrderList] = useState([]);

//   useEffect(() => {
//     const url = `http://localhost:5000/orderList`;
//     fetch(url, {
//       headers: {
//         authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => setOrderList(data));
//   }, [user.email]);
//   return (
//     <div>
//       <h2>Total Orders : {orderList.length}</h2>
//       <ol>
//         {orderList.map((order) => (
//           <li key={order._id}>{order.name}</li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default Orders;
