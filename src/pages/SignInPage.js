import { Button } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./SignInPage.module.css";

const SignInPage = () => {
  return (
    <div className={styles.signinpage}>
      <Header />
      <section className={styles.frameParent}>
        <div className={styles.signInWrapper}>
          <div className={styles.signIn}>
            <div className={styles.signInHeading}>
              <div className={styles.signInTitle}>
                <h1 className={styles.signIn1}>Sign in</h1>
                <div className={styles.signInTo}>
                  Sign in to your account to see products catered to you
                </div>
              </div>
              <form className={styles.credentials}>
                <div className={styles.inputFields}>
                  <div className={styles.username}>Username</div>
                  <img
                    className={styles.inputContainersIcon}
                    alt=""
                    src="/input-containers.svg"
                  />
                </div>
                <div className={styles.inputFields1}>
                  <div className={styles.password}>Password</div>
                  <img
                    className={styles.inputFieldsChild}
                    alt=""
                    src="/frame-153-1.svg"
                  />
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
                  }}
                >
                  Sign In
                </Button>
              </form>
              <div className={styles.orSignIn}>or, sign in with</div>
              <div className={styles.socialSignIn}>
                <img
                  className={styles.socialButtonsIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className={styles.socialButtonsIcon1}
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className={styles.socialButtonsIcon2}
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.backgroundShapeIcon}
          loading="lazy"
          alt=""
          src="/rectangle-49@2x.png"
        />
      </section>
      <Footer linkF3b1db0fEb9f4b0a89f74="/link--f3b1db0feb9f4b0a89f74d955239e7a2png@2x.png" />
    </div>
  );
};

export default SignInPage;
