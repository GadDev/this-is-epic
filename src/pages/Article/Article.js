/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect } from "react";
import ContentTextSection from "../../components/ContentTextSection";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import { useFetch } from "../../hooks/useFetch";
import { useQuery } from "../../hooks/useQuery";
import Bg from "../../assets/images/article-bg.jpg";

const Article = () => {
  const isComponentMounted = useRef(true);
  const [post, setPost] = useState(null);

  const { data, loading, error } = useFetch(
    "data/articles.json",
    {},
    isComponentMounted,
    []
  );
  let query = useQuery();
  useEffect(() => {
    const postId = query.get("id");
    console.log(postId);
    console.log(data);
    const article = data.filter((item) => item.id === Number(postId)).shift();
    setPost((post) => ({ ...post, ...article }));
  }, [data]);

  if (loading && !post) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <Layout>
        <h1>There is a error with your request</h1>
      </Layout>
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
