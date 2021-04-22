import { Spring, animated } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";
import styles from "./Hero.module.css";

const Logo = ({ image }) => {
  return (
    <VisibilitySensor once>
      {({ isVisible }) => {
        return (
          <Spring to={{ opacity: isVisible ? 1 : 0 }}>
            {({ opacity }) => (
              <animated.div className={styles.Logo} style={{ opacity }}>
                <img src={image} alt="" />
              </animated.div>
            )}
          </Spring>
        );
      }}
    </VisibilitySensor>
  );
};

export default Logo;
