import styles from "./footer.module.css";
import { GiSpellBook } from "react-icons/gi";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <GiSpellBook className="h-14 w-14" />
          <h1 className={styles.logoText}>Recipe Book</h1>
        </div>

        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus a
          impedit quae quis quo asperiores sunt qui consequatur voluptates
          porro!
        </p>
        <div className={styles.icons}></div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <div>Recipe</div>
          <div>Foods</div>
          <div>Wine</div>
          <div>Best Cuisine</div>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <div>Facebook</div>
          <div>Instagram</div>
          <div>Youtube</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
