import { useEffect } from "react";
import { useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [loadingAdmin, setLoadingAdmin] = useState(true);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://digimoney-bank-0haz.onrender.com/admin?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setLoadingAdmin(false);
        });
    }
  }, [user]);

  return { admin, loadingAdmin };
};
export default useAdmin;
