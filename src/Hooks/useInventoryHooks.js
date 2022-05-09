import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useInventoryHooks = () => {
  const [inventories, setInventories] = useState([]);

  const navigate = useNavigate();

  const navigateToItemsDetails = (id) => {
    navigate(`/inventory/${id}`);
  };

  const url = `http://localhost:3005/inventory`;

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
