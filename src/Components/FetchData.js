import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const FetchData = (methods, url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [methods.search,url]);
  return { data, setData };
};
export default FetchData;
