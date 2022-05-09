import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useBlogsHooks = () => {
  const [answers, setAnswers] = useState([]);

  const url = `https://fruitshub-server.onrender.com/blogs`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAnswers(data);
      });
  }, []);

  return [answers];
};

export default useBlogsHooks;
