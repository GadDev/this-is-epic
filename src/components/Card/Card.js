import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { Context } from "../../contexts/store";

import Heart from "./Heart"

const Card = ({ item }) => {
  const [isLiked, setIsLiked] = useState(0);
  const [state, dispatch] = useContext(Context);

  const { id, title, description, comments, likes } = item;

  useEffect(() => {
    setIsLiked(state.likes.filter((idItem) => idItem === id).length);
  }, [state, id]);

  return (
    <article className={styles.Card}>
      <div
        className={styles.ImageWrapper}
        style={{ backgroundImage: `url(./assets/images/card-bg-${id}.jpg)` }}
      >
        <img src="" alt="" />
        <div className={styles.Likes}>
          <button onClick={() => dispatch({ type: "LIKE_POST", payload: id })}>
            <span className={styles.LikesIcon}>
              <Heart color={isLiked ? "red" : "#ffffff"} />
            </span>{" "}
            {likes + isLiked}
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
