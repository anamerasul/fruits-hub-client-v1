// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import useInventoryHooks from "../../Hooks/useInventoryHooks";

// import InventoryItems from "./../InventoryItems/inventoryItems";

// const MangeInventory = () => {
//   // const [inventories, navigateToItemsDetails] = useInventoryHooks({});

//   const [inventories, setInventories] = useState([]);

//   const [pageCount, setPageCount] = useState(0);

//   const [page, setPage] = useState(0);

//   const [size, setSize] = useState(12);

//   const navigate = useNavigate();

//   const navigateToItemsDetails = (id) => {
//     navigate(`/inventory/${id}`);
//   };

//   useEffect(() => {
//     const url = `http://localhost:3005/manageinventory?page=${page}&size=${size}`;
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setInventories(data));

//     console.log(url);
//   }, [page, size]);
//   // console.log(inventories);

//   useEffect(() => {
//     const url = `http://localhost:3005/inventory-count`;
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         const count = data.count;
//         const pages = Math.ceil(count / 10);
//         setPageCount(pages);
//       });
//   }, []);
//   return (

//     <div>
//       <div className="bg-yellow-200 py-4">
//         <h2 className="text-2xl md:text-4xl font-black my-4">
//           Inventory Items
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 container ">
//           {inventories.map((inventory) => (
//             <InventoryItems
//               navigateToItemsDetails={navigateToItemsDetails}
//               key={inventory._id}
//               inventory={inventory}
//             ></InventoryItems>
//           ))}
//         </div>
//       </div>

//   );
// };

// export default MangeInventory;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InventoryItems from "./../InventoryItems/inventoryItems";

const MangeInventory = () => {
  // const [inventories, navigateToItemsDetails] = useInventoryHooks({});

  const [inventories, setInventories] = useState([]);

  const [pageCount, setPageCount] = useState(0);

  const [page, setPage] = useState(0);

  const [size, setSize] = useState(12);

  const navigate = useNavigate();

  const navigateToItemsDetails = (id) => {
    navigate(`/inventory/${id}`);
  };

  useEffect(() => {
    const url = `http://localhost:3005/manageinventory?page=${page}&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventories(data));

    // console.log(url);
  }, [page, size]);
  // console.log(inventories);

  useEffect(() => {
    const url = `http://localhost:3005/inventory-count`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 12);
        setPageCount(pages);
      });
  }, []);

  return (
    <div>
      <div className="bg-yellow-200 py-4 ">
        <h2 className="text-2xl md:text-4xl font-black my-10">
          Inventory Items{" "}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  gap-4 container ">
          {inventories.map((inventory) => (
            <InventoryItems
              navigateToItemsDetails={navigateToItemsDetails}
              key={inventory._id}
              inventory={inventory}
            ></InventoryItems>
          ))}
        </div>

        <div className="mr-15 ml-20 my-10 pagination">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              key={number}
              onClick={() => setPage(number)}
              className={
                page === number
                  ? "selected rounded-none px-4 py-2"
                  : "rounded-none px-4 py-2 mx-4 text-white  bg-gray-600"
              }
            >
              {number + 1}
            </button>
          ))}
        </div>
        <Link
          to="/additems"
          className=" w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-md hover:bg-orange-800"
        >
          ADD ITEMS
        </Link>
        <select
          className="hidden"
          onChange={(e) => setSize(e.target.value)}
          name=""
          id=""
        >
          <option value="12">12</option>
          {/* <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option> */}
        </select>
      </div>
    </div>
  );
};

export default MangeInventory;
