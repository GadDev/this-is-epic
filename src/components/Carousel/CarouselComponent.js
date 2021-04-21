import Carousel from "react-multi-carousel";
import { responsive } from "./breakpoints";

import styles from "./Carousel.module.css";
import "react-multi-carousel/lib/styles.css";
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className={styles.CarouselButtonGroup}>
      <button
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
      />
      <button className={styles.Next} onClick={() => next()} />
    </div>
  );
};
const CarouselComponent = ({ children }) => {
  return (
    <Carousel
      transitionDuration={500}
      customTransition="all .5"
      customButtonGroup={<ButtonGroup />}
      arrows={false}
      renderButtonGroupOutside={true}
      responsive={responsive}
      swipeable={true}
      infinite={true}
      draggable={true}
      keyBoardControl={true}
      customTransition="all .5"
      autoplay={false}
      containerClass="carousel-logo-container"
    >
      {children}
    </Carousel>
  );
};

export default CarouselComponent;
