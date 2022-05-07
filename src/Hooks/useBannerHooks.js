import { useEffect, useState } from "react";

const useBannerHooks = () => {
  const [banners, setBanners] = useState([]);

  const url = `http://localhost:3005/banner`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBanners(data));
  }, []);

  return [banners];
};

export default useBannerHooks;
