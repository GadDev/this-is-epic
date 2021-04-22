import { useContext, useEffect, useRef } from "react";

import { useFetch } from "../../hooks/useFetch";
import { Context } from "../../contexts/store";

import ContentSection from "../../components/ContentSection";
import CarouselSection from "../../components/CarouselSection";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";

import BgHome from "../../assets/images/home-bg-desktop.jpg";
import Logo from "../../assets/images/logo.png";

import { content } from "./dataView";

const Home = () => {
  const [state, dispatch] = useContext(Context);
  const isComponentMounted = useRef(true);

  const { data, loading, error } = useFetch(
    "data/articles.json",
    {},
    isComponentMounted,
    []
  );

  useEffect(() => {
    dispatch({ type: "SET_POSTS", payload: data });
  }, [data, dispatch]);

  if (loading) {
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
  console.log(state);
  return (
    <Layout>
      <Hero bg={BgHome} logo={Logo}>
        <>
          <h2>Humble Beginnings</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </>
      </Hero>
      <CarouselSection title="pictures worth seeing" items={state.posts} />
      <ContentSection>{content.sectionTextOne}</ContentSection>
      <CarouselSection title="articles worth reading" items={state.posts} />
      <ContentSection>{content.sectionTextTwo}</ContentSection>
    </Layout>
  );
};

export default Home;
