import PropTypes from "prop-types";
import "./CartPage.css";

const CartPage = ({ className = "", yourCart }) => {
  return (
    <section className={`cart-page ${className}`}>
      <header className="header6">
        <div className="header7">
          <div className="logo-container1">
            <div className="logo2">
              <div className="frame-parent6">
                <div className="vector-wrapper">
                  <img
                    className="vector-icon2"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className="card-melange2">Card Melange</div>
              </div>
            </div>
            <div className="header-links-container">
              <div className="header-links1">
                <div className="header-links-inner">
                  <div className="frame-parent7">
                    <div className="dc1c8118-8533-4bf8-a1e4-d781e9-wrapper">
                      <img
                        className="dc1c8118-8533-4bf8-a1e4-d781e9-icon1"
                        alt=""
                        src="/dc1c811885334bf8a1e4d781e999f8bdpng@2x.png"
                      />
                    </div>
                    <div className="uae2">UAE</div>
                    <div className="icon-wrapper">
                      <img className="icon4" alt="" src="/icon.svg" />
                    </div>
                  </div>
                </div>
                <div className="link-buy-egift-cards-wrapper">
                  <a
                    className="link-buy4"
                    href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-1463"
                    target="_blank"
                  >
                    Buy eGift Cards
                  </a>
                </div>
                <div className="link-start-a-group-gift-wrapper">
                  <div className="link-start1">Start a Group Gift</div>
                </div>
                <div className="link28">
                  <div className="for-business1">For Business</div>
                  <img className="icon5" alt="" src="/icon-1.svg" />
                </div>
                <div className="link-buy-in-store-wrapper">
                  <div className="link-buy5">Buy in Store</div>
                </div>
              </div>
            </div>
            <div className="help-login-container">
              <div className="help-login-links1">
                <div className="link29">
                  <div className="help-login-icons">
                    <div className="helpline1">Helpline</div>
                    <img
                      className="help-center-iconsvg1"
                      loading="lazy"
                      alt=""
                      src="/helpcentericonsvg@2x.png"
                    />
                  </div>
                </div>
                <div className="link30">
                  <div className="login-signup-group">
                    <div className="login-signup1">Login / Signup</div>
                    <img
                      className="user-login-iconsvg1"
                      loading="lazy"
                      alt=""
                      src="/userloginiconsvg@2x.png"
                    />
                  </div>
                </div>
                <div className="link31">
                  <div className="cart-group">
                    <div className="cart1">Cart</div>
                    <img
                      className="header-cart-iconsvg1"
                      loading="lazy"
                      alt=""
                      src="/headercarticonsvg@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="hourly-rate-wrapper">
        <div className="hourly-rate">
          <div className="your-cart-wrapper">
            <h1 className="your-cart">{yourCart}</h1>
          </div>
          <div className="view-or-edit">
            View or edit your cart before checkout
          </div>
        </div>
      </div>
    </section>
  );
};

CartPage.propTypes = {
  className: PropTypes.string,
  yourCart: PropTypes.string,
};

export default CartPage;
