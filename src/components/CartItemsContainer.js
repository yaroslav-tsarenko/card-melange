import CardQuantity from "./CardQuantity";
import PropTypes from "prop-types";
import "./CartItemsContainer.css";

const CartItemsContainer = ({ className = "" }) => {
  return (
    <section className={`cart-items-container ${className}`}>
      <div className="panorma-card-title">
        <div className="product-row">
          <div className="cart-actions">
            <div className="header8">
              <div className="header-child" />
              <div className="checkout-details4">
                <div className="product1">Product</div>
              </div>
              <div className="subtotal-details">
                <div className="price">Price</div>
              </div>
              <div className="quantity">Quantity</div>
              <div className="total">Total</div>
            </div>
            <div className="company-links1">
              <img
                className="cards-icon1"
                loading="lazy"
                alt=""
                src="/cards@2x.png"
              />
              <div className="gift-card-name-container">
                <div className="panorma-presents-gift1">
                  {" "}
                  Panorma Presents Gift Card
                </div>
              </div>
              <div className="policy-navigation-wrapper">
                <div className="policy-navigation">$120.00</div>
              </div>
              <div className="social-links1">
                <div className="socials-title">
                  <div className="plus-minus">
                    <img
                      className="icon-plus1"
                      loading="lazy"
                      alt=""
                      src="/iconplus.svg"
                    />
                  </div>
                  <div className="facebook-link1">1</div>
                  <input className="grand-total1" type="checkbox" />
                </div>
                <div className="app-download1">
                  <div className="hourly1">Hourly</div>
                  <div className="app-download-inner">
                    <img
                      className="frame-child"
                      alt=""
                      src="/frame-1000002972.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="copyright">$10.11</div>
            </div>
          </div>
          <CardQuantity
            cards="/cards-1@2x.png"
            panormaPresentsGiftCard=" Panorma Presents Gift Card"
            divider="$200.00"
          />
          <CardQuantity
            cards="/cards-2@2x.png"
            panormaPresentsGiftCard="Panorma Presents Gift Card"
            divider="$120.00"
          />
          <div className="country-links">
            <div className="country-selection" />
            <button className="button37">
              <img className="tag-icon36" alt="" src="/tag-icon.svg" />
              <div className="button38">Checkout</div>
              <img className="tag-icon37" alt="" src="/tag-icon.svg" />
            </button>
          </div>
        </div>
        <div className="checkout-details5">
          <div className="checkout-header-container">
            <div className="header9">
              <div className="checkout-details6">Checkout Details</div>
            </div>
          </div>
          <div className="cart-total-container">
            <div className="subtotal-values">
              <div className="cart-subtotal1">Cart Subtotal</div>
              <div className="grand-total-label">$360.00</div>
            </div>
          </div>
          <div className="shipping-costs-wrapper">
            <div className="shipping-costs">
              <div className="cost-breakdown">
                <div className="shipping-handling1">{`Shipping & Handling`}</div>
                <div className="other-taxes1">Other Taxes</div>
              </div>
              <div className="other-tax-labels">
                <div className="div9">$0.00</div>
                <div className="div10">$0.00</div>
              </div>
            </div>
          </div>
          <div className="social-header">
            <div className="company-info" />
          </div>
          <div className="app-download2">
            <div className="grand-total-group">
              <div className="grand-total2">Grand Total</div>
              <div className="div11">$360.00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CartItemsContainer.propTypes = {
  className: PropTypes.string,
};

export default CartItemsContainer;
