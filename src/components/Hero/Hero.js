import { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import styles from "./Hero.module.css";

const Hero = ({ bg, children, logo }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const styleVisible = isVisible
    ? { opacity: "1", transition: "2s opacity" }
    : { opacity: 0, transition: "2s opacity" };

  const imgLogo = logo ? (
    <div ref={ref} className={styles.Logo} style={styleVisible}>
      <img src={logo} alt="" />
    </div>
  ) : null;

  return (
    <section className={styles.Hero} style={{ backgroundImage: `url(${bg})` }}>
      {imgLogo}
      <article ref={ref} style={styleVisible}>
        {children}
      </article>
    </section>
  );
};

export default Hero;
