import Header from "../components/Header";
import SignIn from "../components/SignIn";
import Footer from "../components/Footer";
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  return (
    <div className={styles.signuppage}>
      <Header />
      <section className={styles.signupFormParent}>
        <div className={styles.signupForm}>
          <SignIn />
        </div>
        <img
          className={styles.backgroundShapeIcon}
          loading="lazy"
          alt=""
          src="/rectangle-491@2x.png"
        />
      </section>
      <Footer linkF3b1db0fEb9f4b0a89f74="/link--f3b1db0feb9f4b0a89f74d955239e7a2png1@2x.png" />
    </div>
  );
};

export default SignUpPage;
