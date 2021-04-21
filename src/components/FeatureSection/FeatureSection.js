import { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import styles from "./FeatureSection.module.css";

const FeatureSection = ({ children }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const styleArticle = isVisible ? { opacity: "1" } : {};

  return (
    <section className={styles.FeatureSection}>
      <article
        ref={ref}
        className={styles.FeatureSection__Content}
        style={styleArticle}
      >
        <h3>Textures by</h3>
        <h4>Jordan Hetzer</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </article>
    </section>
  );
};

export default FeatureSection;
