import ApiContext from "./apiContext";
import { useEffect, useState } from "react";

function ApiContextProvider({ children }) {
  const [data, setData] = useState(null);
  const [searchItem, setSearchItem] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const result = await res.json();

      setData(result);
    };

    fetchProducts();
  }, []);

  console.log(data);

  return (
    <ApiContext.Provider
      value={{
        data,
        setData,
        searchItem,
        setSearchItem,
        searchQuery,
        setSearchQuery,
        user,
        setUser
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export default ApiContextProvider;
