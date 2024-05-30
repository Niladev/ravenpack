import { Link } from "react-router-dom";
import { RavenPackLogo } from "./RavenPackLogo";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <RavenPackLogo />
      </Link>
    </header>
  );
};
