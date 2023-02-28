import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setLoading(false);
          setData(data);
        });
    }, 1000);
  }, [url]);

  return { data, loading };
};

export default useFetch;