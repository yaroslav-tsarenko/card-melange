import PropTypes from "prop-types";
import "./FilterContainer.css";

const FilterContainer = ({ className = "" }) => {
  return (
    <div className={`filter-container ${className}`}>
      <div className="form-field">
        <div className="form-label-wrapper">
          <div className="form-label">Form Label</div>
        </div>
        <img className="icon3" alt="" src="/icon-2.svg" />
      </div>
      <div className="filter-container-child" />
      <div className="category-filter">
        <div className="dropdown">
          <div className="select-category-wrapper">
            <div className="select-category">Select Category</div>
          </div>
          <img className="arrow-drop-up-icon" alt="" src="/arrow-drop-up.svg" />
        </div>
        <div className="category-options">
          <div className="most-popular1">Most Popular</div>
        </div>
        <div className="category-options1">
          <div className="single-brands">Single Brands</div>
        </div>
        <div className="category-options2">
          <div className="hypermarkets1">HyperMarkets</div>
        </div>
        <div className="category-options3">
          <div className="online-shopping1">Online Shopping</div>
        </div>
        <div className="category-options4">
          <div className="fashion-and-accessories">Fashion and Accessories</div>
        </div>
        <div className="category-options5">
          <div className="electronics1">Electronics</div>
        </div>
        <button className="button28">
          <img className="tag-icon28" alt="" src="/tag-icon1.svg" />
          <div className="button29">See More</div>
          <img className="tag-icon29" alt="" src="/tag-icon1.svg" />
        </button>
      </div>
    </div>
  );
};

FilterContainer.propTypes = {
  className: PropTypes.string,
};

export default FilterContainer;
