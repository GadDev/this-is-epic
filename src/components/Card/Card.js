import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import cn from "classnames";
const Card = ({ item }) => {
  const { id, title, description, comments, likes } = item;
  return (
    <article className={styles.Card}>
      <div
        className={styles.ImageWrapper}
        style={{ backgroundImage: `url(./assets/images/card-bg-${id}.jpg)` }}
      >
        <img src="" alt="" />
        <div className={styles.Likes}>
          <button>
            <span className={styles.LikesIcon}></span> {likes}
          </button>
        </div>
      </div>
      <div className={styles.Content}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className={styles.CommentsWrapper}>
        <div className={styles.CommentsCount}>{comments} comments</div>
        <Link to={`/article?id=${id}`} className={styles.ReadMore}>
          Read more
        </Link>
      </div>
    </article>
  );
};

export default Card;
