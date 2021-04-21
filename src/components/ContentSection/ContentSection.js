import styles from "./ContentSection.module.css";

const ContentSection = ({children}) => {
  return <div className={styles.ContentSection}>{children}</div>;
};

export default ContentSection;
