import styles from "./Header.module.css";
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className={styles.Header}>
      <Link to="/" className={styles.MenuButton}>Menu</Link>
    </div>
  );
};

export default Header;
