import PropTypes from "prop-types";
import styles from "./DefinitionItems.module.css";

const DefinitionItems = ({
  className = "",
  lostOrStolenGiftCards,
  responsibility,
  yourCompanyIsNotResponsib,
  safeguarding,
  usersShouldKeepTheirGiftC,
}) => {
  return (
    <div className={[styles.definitionItems, className].join(" ")}>
      <h1 className={styles.lostOrStolenContainer}>
        <ol className={styles.lostOrStolenGiftCards}>
          <li>{lostOrStolenGiftCards}</li>
        </ol>
      </h1>
      <div className={styles.frameParent}>
        <div className={styles.responsibilityParent}>
          <h3 className={styles.responsibility}>{responsibility}</h3>
          <div className={styles.yourCompanyIs}>
            {yourCompanyIsNotResponsib}
          </div>
        </div>
        <div className={styles.safeguardingParent}>
          <h3 className={styles.safeguarding}>{safeguarding}</h3>
          <div className={styles.usersShouldKeep}>
            {usersShouldKeepTheirGiftC}
          </div>
        </div>
      </div>
    </div>
  );
};

DefinitionItems.propTypes = {
  className: PropTypes.string,
  lostOrStolenGiftCards: PropTypes.string,
  responsibility: PropTypes.string,
  yourCompanyIsNotResponsib: PropTypes.string,
  safeguarding: PropTypes.string,
  usersShouldKeepTheirGiftC: PropTypes.string,
};

export default DefinitionItems;
