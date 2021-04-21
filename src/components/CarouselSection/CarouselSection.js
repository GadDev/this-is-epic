import styles from "./CarouselSection.module.css";

import CarouselComponent from "../Carousel";
import Card from "../Card";
const CarouselSection = ({ items, title }) => {
  return (
    <section className={styles.CarouselSection}>
      <h3>{title}</h3>
      <CarouselComponent>
        {items.map((item) => {
          return <Card key={item.title} item={item} />;
        })}
      </CarouselComponent>
    </section>
  );
};

export default CarouselSection;
