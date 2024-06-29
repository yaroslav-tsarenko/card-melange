import PropTypes from "prop-types";
import "./CardsProducts.css";

const CardsProducts = ({ className = "", rectangle50 }) => {
  return (
    <div className={`cards-products ${className}`}>
      <img className="cards-products-child" alt="" src={rectangle50} />
      <img
        className="makeupalley-logosvg-icon"
        alt=""
        src="/makeupalley-logosvg@2x.png"
      />
      <b className="b">$40</b>
    </div>
  );
};

CardsProducts.propTypes = {
  className: PropTypes.string,
  rectangle50: PropTypes.string,
};

export default CardsProducts;
