import FrameComponent from "../components/FrameComponent";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import styles from "./AccountPage.module.css";

const AccountPage = () => {
  return (
    <div className={styles.accountpage}>
      <FrameComponent />
      <Dashboard />
      <Footer linkF3b1db0fEb9f4b0a89f74="/link--f3b1db0feb9f4b0a89f74d955239e7a2png@2x.png" />
    </div>
  );
};

export default AccountPage;
