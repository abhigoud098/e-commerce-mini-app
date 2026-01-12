import "./ProductCard.css";

function ProductCard({ data }) {
  return (
    <div className="product-card">
      <div className="image-box">
        <img src={data?.images[0]} alt={data?.brand} />
      </div>

      <div className="product-info">
        <h3>{data?.title}</h3>
        <p className="desc">{data?.description}</p>

        <div className="rating-price">
          <span className="rating">⭐ {data?.rating}</span>

          <div className="price-box">
            <span className="original-price">₹{data?.price}</span>
          </div>
        </div>

        <button className="cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
