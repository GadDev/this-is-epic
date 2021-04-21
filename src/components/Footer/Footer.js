import styles from "./Footer.module.css";

import { contents } from "./content_block";

const FooterBlock = ({ data }) => {
  const { title, content } = data;
  return (
    <div className={styles.FooterBlock}>
      <h5>{title}</h5>
      {content}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <section className={styles.FooterBlock_Wrapper}>
        {contents.map((content) => (
          <FooterBlock key={content.title} data={content} />
        ))}
      </section>
      <small className={styles.Copyright}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna
      </small>
    </footer>
  );
};

export default Footer;
