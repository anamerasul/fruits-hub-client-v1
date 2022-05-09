import { useEffect, useState } from "react";

const useBannerHooks = () => {
  const [banners, setBanners] = useState([]);

  const url = `https://fruitshub-server.onrender.com/banner`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBanners(data));
  }, []);

  return [banners];
};

export default useBannerHooks;
