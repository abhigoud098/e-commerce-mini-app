import { useContext, useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import "./Home.css";
import ApiContext from "../../context/apiContext";

function Home() {
  const { data } = useContext(ApiContext);
  const { searchItem } = useContext(ApiContext);

  const filteredProducts = data?.products?.filter((product) =>
    product.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  const [startProduct] = useState(() => Math.floor(Math.random() * 30));
  const [productNum, setProductNum] = useState(startProduct);

  useEffect(() => {
    if (!data?.products) return;

    const timer = setInterval(() => {
      setProductNum((prev) =>
        prev === startProduct + 3 ? startProduct : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [data, startProduct]);

  if (!data?.products) {
    return <h2>Loading...</h2>;
  }

  const product = data.products[productNum];

  return (
    <div className="main-content-container">
      <div className="hero-banner">
        <img src={product?.images?.[0]} alt="banner" className="hero-image" />

        <div className="hero-overlay">
          <h1>Starting ₹{product?.price}</h1>
          <h4 className="subtitle">{product?.title}</h4>

          <div className="brands">
            <span>{product?.brand}</span>
            <span id="availabilityStatus">{product?.availabilityStatus}</span>
          </div>

          <button className="shop-btn">Shop Now</button>
        </div>
      </div>

      <div className="still-you-want">
        {data.products.slice(0, 6).map((item) => (
          <div className="product-component" key={item.id}>
            <ProductCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
