import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const useItemDetailsHooks = () => {
  const itemsId = useParams();
  // console.log(itemsId);
  const { id } = itemsId;

  //   console.log(id);
  const [items, setitems] = useState({});
  const url = `https://fruitshub-server.onrender.com/inventory/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setitems(data);
      });
  }, []);

  return [items];
};

export default useItemDetailsHooks;
