import ContactForm from "../components/ContactForm";
import styles from "./PaymentPage.module.css";

const PaymentPage = () => {
  return (
    <div className={styles.paymentpage}>
      <div className={styles.paymentpageInner}>
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <div className={styles.logoContainer}>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
              <div className={styles.cardMelange}>Card Melange</div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/frame-1000006877@2x.png"
            />
            <div className={styles.poweredByParent}>
              <div className={styles.poweredBy}>
                <div className={styles.poweredBy1}>{`Powered by `}</div>
              </div>
              <div className={styles.paymentIconsInstance}>
                <img
                  className={styles.paymentIcons}
                  loading="lazy"
                  alt=""
                  src="/payment-icons@2x.png"
                />
                <div className={styles.contactForm}>
                  <img
                    className={styles.contactFormChild}
                    loading="lazy"
                    alt=""
                    src="/vector-341.svg"
                  />
                </div>
                <div className={styles.legalWrapper}>
                  <div className={styles.legal}>Legal</div>
                </div>
                <div className={styles.refundsWrapper}>
                  <div className={styles.refunds}>Refunds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameItem} />
        <ContactForm />
      </div>
    </div>
  );
};

export default PaymentPage;
