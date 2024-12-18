import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div>
      <img src="public/assets/Logo.png" alt="Logo" className={styles.logo} />
    </div>
  );
};

export default Logo;
