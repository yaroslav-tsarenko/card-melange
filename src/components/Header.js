import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({
  className = "",
  logoContainerTop,
  logoContainerPosition,
}) => {
  const headerStyle = useMemo(() => {
    return {
      top: logoContainerTop,
      position: logoContainerPosition,
    };
  }, [logoContainerTop, logoContainerPosition]);

  return (
    <header className={`header4 ${className}`} style={headerStyle}>
      <div className="header5">
        <div className="logo-container">
          <div className="logo">
            <div className="logo-wrapper">
              <div className="logo-background">
                <img
                  className="vector-icon"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="card-melange">Card Melange</div>
            </div>
          </div>
          <div className="header-links">
            <div className="header-buttons">
              <div className="u-a-e-flag">
                <div className="u-a-e-flag-container">
                  <div className="u-a-e-flag-background">
                    <img
                      className="dc1c8118-8533-4bf8-a1e4-d781e9-icon"
                      alt=""
                      src="/dc1c811885334bf8a1e4d781e999f8bdpng@2x.png"
                    />
                  </div>
                  <div className="uae">UAE</div>
                  <div className="business-link">
                    <img className="icon1" alt="" src="/icon.svg" />
                  </div>
                </div>
              </div>
              <div className="header-button-links">
                <a
                  className="link-buy"
                  href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-1463"
                  target="_blank"
                >
                  Buy eGift Cards
                </a>
              </div>
              <div className="header-button-links1">
                <div className="link-start">Start a Group Gift</div>
              </div>
              <div className="link">
                <div className="for-business">For Business</div>
                <img className="icon2" alt="" src="/icon-1.svg" />
              </div>
              <div className="header-button-links2">
                <div className="link-buy1">Buy in Store</div>
              </div>
            </div>
          </div>
          <div className="help-login">
            <div className="help-login-links">
              <div className="link1">
                <div className="help-login-link-containers">
                  <div className="helpline">Helpline</div>
                  <img
                    className="help-center-iconsvg"
                    alt=""
                    src="/helpcentericonsvg@2x.png"
                  />
                </div>
              </div>
              <div className="link2">
                <div className="login-signup-parent">
                  <div className="login-signup">Login / Signup</div>
                  <img
                    className="user-login-iconsvg"
                    alt=""
                    src="/userloginiconsvg@2x.png"
                  />
                </div>
              </div>
              <div className="link3">
                <div className="cart-parent">
                  <div className="cart">Cart</div>
                  <img
                    className="header-cart-iconsvg"
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
  );
};

Header.propTypes = {
  className: PropTypes.string,

  /** Style props */
  logoContainerTop: PropTypes.any,
  logoContainerPosition: PropTypes.any,
};

export default Header;
