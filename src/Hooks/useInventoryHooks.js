import { useState, useEffect } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useInventoryHooks = () => {
  const [inventories, setInventories] = useState([]);

  const navigate = useNavigate();

  const navigateToItemsDetails = (id) => {
    navigate(`/inventory/${id}`);
  };

  const url = `http://localhost:3005/inventory`;

  useEffect(() => {
    axios
      .get(url)
      .then(function (data) {
        // handle success
        console.log(data.data);
        setInventories(data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        toast.error(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return [inventories, navigateToItemsDetails];
};

export default useInventoryHooks;
