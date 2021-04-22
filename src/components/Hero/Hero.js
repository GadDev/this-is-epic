import { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";

import Logo from "./Logo";
import styles from "./Hero.module.css";

const Hero = ({ bg, children, logo }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const styleVisible = isVisible
    ? { opacity: "1", transition: "2s opacity" }
    : { opacity: "0", transition: "0.5s opacity" };

  const imgLogo = logo ? <Logo image={logo} /> : null;

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
