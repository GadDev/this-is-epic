import styles from "./ContentSection.module.css";

const ContentSection = ({ children, id }) => {
  return (
    <div className={styles.ContentSection} id={id}>
      {children}
    </div>
  );
};

export default ContentSection;
