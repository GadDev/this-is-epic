import styles from "./Header.module.css";
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className={styles.Header}>
      <Link to="/" className={styles.MenuButton}>
        Menu
      </Link>
      <a href="#start-up" className={styles.Link}>Paint your Pixture</a>
    </div>
  );
};

export default Header;
