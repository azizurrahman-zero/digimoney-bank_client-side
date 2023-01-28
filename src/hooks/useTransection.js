import { useEffect, useState } from "react";

const useTransection = (userInfo, page) => {
  const [transection, setTransection] = useState([]);

  useEffect(() => {
    fetch(
      `https://digimoney-bank-0haz.onrender.com/transection/${userInfo?.accountNumber}?page=${page}`
    )
      .then((res) => res.json())
      .then((data) => setTransection(data));
  }, [page, userInfo?.accountNumber]);

  return { transection, setTransection };
};
export default useTransection;
