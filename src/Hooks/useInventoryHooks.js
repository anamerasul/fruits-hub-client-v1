import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useInventoryHooks = () => {
  const [inventories, setInventories] = useState([]);

  const navigate = useNavigate();

  const navigateToItemsDetails = (id) => {
    navigate(`/inventory/${id}`);
  };

  const url = `https://fruitshub-server.onrender.com/inventory`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setInventories(data);
      });
  }, []);

  return [inventories, navigateToItemsDetails];
};

export default useInventoryHooks;
