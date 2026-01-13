import { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ApiContext from "../../context/apiContext";

function Navbar() {
  const { searchItem, setSearchItem, setSearchQuery } = useContext(ApiContext);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchItem("");
    }
  };

  return (
    <>
      <div className="nav-container">
        <h1 className="nav-logo">ShopVerse</h1>
        <input
          type="text"
          placeholder="Search product"
          className="input"
          value={searchItem}
          onChange={(e) => {
            setSearchQuery(setSearchItem(e.target.value).trim());
          }}
          onKeyDown={handleKeyDown}
        />
        <ul>
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/cart">Cart</Link>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
