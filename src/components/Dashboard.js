import PropTypes from "prop-types";
import styles from "./Dashboard.module.css";

const Dashboard = ({ className = "" }) => {
  return (
    <section className={[styles.dashboard, className].join(" ")}>
      <div className={styles.dashboardHeaderParent}>
        <div className={styles.dashboardHeader}>
          <div className={styles.yourDashboard}>Your Dashboard</div>
          <div className={styles.header}>
            <div className={styles.yourActiveDownloads}>
              Your Active Downloads
            </div>
          </div>
          <div className={styles.dashboardCards}>
            <div className={styles.cardContainer}>
              <div className={styles.cardRow}>
                <div className={styles.wrapperCards}>
                  <img
                    className={styles.cardsIcon}
                    loading="lazy"
                    alt=""
                    src="/cards@2x.png"
                  />
                </div>
                <div className={styles.cardDetails}>
                  <div className={styles.panormaPresentsGift}>
                    {" "}
                    Panorma Presents Gift Card
                  </div>
                </div>
                <div className={styles.cardCredits}>
                  <div className={styles.downloadCreditDetails}>$100.00</div>
                  <div className={styles.credits}>12 Credits</div>
                </div>
              </div>
              <div className={styles.upTime}>
                <div className={styles.upTime1}>Up Time</div>
                <div className={styles.hrs}>120 Hrs</div>
              </div>
              <div className={styles.cardActions}>
                <div className={styles.renewalInfo}>
                  <img
                    className={styles.iconsBlock}
                    loading="lazy"
                    alt=""
                    src="/icons-block.svg"
                  />
                </div>
                <div className={styles.renewalDetails}>
                  <div className={styles.renewalIcon}>
                    <div className={styles.nextRenewal}>
                      <div className={styles.nextRenewal1}>Next Renewal</div>
                      <div className={styles.april2024}>24 April, 2024</div>
                    </div>
                  </div>
                  <div className={styles.cancellation}>
                    <div className={styles.cancel}>Cancel</div>
                    <div className={styles.renewalButton}>
                      <div className={styles.iconsBlockWrapper}>
                        <img
                          className={styles.iconsBlock1}
                          alt=""
                          src="/icons-block-1.svg"
                        />
                      </div>
                      <div className={styles.renew}>Renew</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.dashboardCardsChild} />
          </div>
        </div>
        <div className={styles.checkoutDetailsWrapper}>
          <div className={styles.checkoutDetails}>
            <div className={styles.headerWrapper}>
              <div className={styles.header1}>
                <div className={styles.userDetails}>User Details</div>
              </div>
            </div>
            <div className={styles.checkoutData}>
              <div className={styles.detailItems}>
                <div className={styles.name}>Name</div>
                <div className={styles.darnellRoob}>Darnell Roob</div>
              </div>
            </div>
            <div className={styles.detailRows}>
              <div className={styles.emailAddressParent}>
                <div className={styles.emailAddress}>Email Address</div>
                <div className={styles.darnellroobhotmailcom}>
                  Darnell.Roob@hotmail.com
                </div>
              </div>
            </div>
            <div className={styles.detailRows1}>
              <div className={styles.planParent}>
                <div className={styles.plan}>Plan</div>
                <div className={styles.basic}>Basic</div>
              </div>
            </div>
            <div className={styles.detailRows2}>
              <div className={styles.expiryDateParent}>
                <div className={styles.expiryDate}>Expiry Date</div>
                <div className={styles.april20241}>24 April, 2024</div>
              </div>
            </div>
            <div className={styles.detailRows3}>
              <div className={styles.autoRenewalParent}>
                <div className={styles.autoRenewal}>Auto Renewal</div>
                <div className={styles.on}>On</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Dashboard.propTypes = {
  className: PropTypes.string,
};

export default Dashboard;
