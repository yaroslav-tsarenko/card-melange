import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import styles from "./SignIn.module.css";

const SignIn = ({ className = "" }) => {
  return (
    <div className={[styles.signIn, className].join(" ")}>
      <div className={styles.signInTitle}>
        <h1 className={styles.signUp}>Sign up</h1>
        <div className={styles.signUpTo}>
          Sign up to get rewards, and many more
        </div>
      </div>
      <form className={styles.inputFields}>
        <div className={styles.nameAddressUsername}>
          <div className={styles.nameAddressUsernameLabels}>
            <div className={styles.yourName}>Your Name</div>
          </div>
          <TextField
            className={styles.emailCountryPassword}
            placeholder="Email"
            variant="outlined"
            sx={{
              "& fieldset": { border: "none", borderColor: "#ededed" },
              "& .MuiInputBase-root": {
                height: "40px",
                backgroundColor: "#ededed",
              },
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />
        </div>
        <div className={styles.nameAddressUsername1}>
          <div className={styles.addressWrapper}>
            <div className={styles.address}>Address</div>
          </div>
          <div className={styles.countryParent}>
            <div className={styles.country}>Country</div>
            <img
              className={styles.emailCountryPasswordIcons}
              alt=""
              src="/email-country-password-icons.svg"
            />
          </div>
        </div>
        <div className={styles.nameAddressUsername2}>
          <div className={styles.usernameParent}>
            <div className={styles.username}>Username</div>
            <img
              className={styles.nameAddressUsernameIcons}
              alt=""
              src="/input-containers.svg"
            />
          </div>
          <div className={styles.passwordParent}>
            <div className={styles.password}>Password</div>
            <img className={styles.frameChild} alt="" src="/frame-153-1.svg" />
          </div>
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
          Sign Up
        </Button>
      </form>
      <div className={styles.orSignUp}>or, sign up with</div>
      <div className={styles.socialButtons}>
        <img
          className={styles.socialIcons}
          loading="lazy"
          alt=""
          src="/frame-1581.svg"
        />
        <img
          className={styles.socialIcons1}
          loading="lazy"
          alt=""
          src="/frame-1581.svg"
        />
        <img
          className={styles.socialIcons2}
          loading="lazy"
          alt=""
          src="/frame-1581.svg"
        />
      </div>
    </div>
  );
};

SignIn.propTypes = {
  className: PropTypes.string,
};

export default SignIn;
