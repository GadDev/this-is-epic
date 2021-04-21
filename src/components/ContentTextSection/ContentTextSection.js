import styles from "./ContentTextSection.module.css";

const ContentTextSection = ({ copytext }) => {
  return (
    <section className={styles.ContentTextSection}>
      <article dangerouslySetInnerHTML={{ __html:  copytext  }} />
    </section>
  );
};

export default ContentTextSection;
