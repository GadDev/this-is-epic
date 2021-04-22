/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useRef, useState, useEffect } from "react";
import ContentTextSection from "../../components/ContentTextSection";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import { useQuery } from "../../hooks/useQuery";
import Bg from "../../assets/images/article-bg.jpg";

import { Context } from "../../contexts/store";

const Article = () => {
  const [post, setPost] = useState(null);
  const [state, dispatch] = useContext(Context);

  let query = useQuery();
  useEffect(() => {
    const postId = query.get("id");

    const article = state.posts
      .filter((item) => item.id === Number(postId))
      .shift();
    setPost((post) => ({ ...post, ...article }));
  }, [state]);

  if (!post) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <Layout>
      <Hero bg={Bg} logo="">
        <>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </>
      </Hero>
      <ContentTextSection copytext={post.content} />
    </Layout>
  );
};

export default Article;
