import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

const ContactForm = ({ className = "" }) => {
  return (
    <div className={[styles.contactForm, className].join(" ")}>
      <div className={styles.contactInformationParent}>
        <div className={styles.contactInformation}>Contact Information</div>
        <TextField
          className={styles.formField}
          placeholder="Email"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#00ab5f" },
            "& .MuiInputBase-root": { height: "54px", backgroundColor: "#fff" },
            "& .MuiInputBase-input": { color: "#000" },
          }}
        />
      </div>
      <h3 className={styles.paymentInformation}>Payment Information</h3>
      <div className={styles.cardInformationParent}>
        <div className={styles.cardInformation}>Card Information</div>
        <div className={styles.formField1}>
          <div className={styles.cardNumberPlaceholder}>
            1234 1234 1234 1234
          </div>
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/frame-1000006882@2x.png"
            />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/frame-1000006883@2x.png"
            />
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/frame-1000006884@2x.png"
            />
          </div>
          <img className={styles.icon} alt="" src="/icon.svg" />
        </div>
        <div className={styles.formFieldParent}>
          <div className={styles.formField2}>
            <div className={styles.mmyy}>MM/YY</div>
            <img className={styles.icon1} alt="" src="/icon.svg" />
          </div>
          <div className={styles.formField3}>
            <div className={styles.mmyy1}>MM/YY</div>
            <img className={styles.icon2} alt="" src="/icon.svg" />
          </div>
        </div>
      </div>
      <div className={styles.carholderNameParent}>
        <div className={styles.carholderName}>Carholder Name</div>
        <div className={styles.formField4}>
          <input
            className={styles.nameOnCard}
            placeholder="Name on Card"
            type="text"
          />
          <img className={styles.icon3} alt="" src="/icon.svg" />
        </div>
      </div>
      <div className={styles.countryOrRegionParent}>
        <div className={styles.countryOrRegion}>Country or region</div>
        <div className={styles.formField5}>
          <div className={styles.usa}>USA</div>
          <img
            className={styles.formFieldChild}
            alt=""
            src="/frame-1000006889.svg"
          />
          <img className={styles.icon4} alt="" src="/icon.svg" />
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameDiv} />
        <div className={styles.iVerifiedThat}>
          I verified that my device is eSIM compatible and is not carrier locked
          and i agree to the refund policy.
        </div>
      </div>
      <img
        className={styles.contactFormChild}
        loading="lazy"
        alt=""
        src="/vector-342.svg"
      />
      <div className={styles.iVerifiedThat1}>
        I verified that my device is eSIM compatible and is not carrier locked
        and i agree to the refund policy.
      </div>
      <Button
        className={styles.button}
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "16",
          background: "#b4daed",
          borderRadius: "4px",
          "&:hover": { background: "#b4daed" },
          height: 54,
        }}
      >
        Pay Now
      </Button>
    </div>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
};

export default ContactForm;
