import { useState, useEffect } from "react";

import axios from "axios";
import { toast } from "react-toastify";

const useBlogsHooks = () => {
  const [answers, setAnswers] = useState([]);

  const url = `http://localhost:3005/blogs`;

  useEffect(() => {
    axios
      .get(url)
      .then(function (data) {
        // handle success
        console.log(data.data);
        setAnswers(data.data);
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

  return [answers];
};

export default useBlogsHooks;
