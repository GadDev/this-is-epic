import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { Context } from "../../contexts/store";

const Heart = ({ color = "#ffffff" }) => {
  return (
    <svg
      height="9"
      viewBox="0 0 10 9"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m409.187 1207a2.523 2.523 0 0 0 -1.884.82.016.016 0 0 0 0 .01l-.3.39-.3-.37a2.519 2.519 0 0 0 -1.885-.85 2.742 2.742 0 0 0 -1.988.85 2.951 2.951 0 0 0 0 4.09l3.733 3.87a.614.614 0 0 0 .888 0l3.733-3.87a2.951 2.951 0 0 0 0-4.09 2.743 2.743 0 0 0 -1.989-.85z"
        fill={color}
        fillRule="evenodd"
        transform="translate(-402 -1207)"
      />
    </svg>
  );
};
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
