import Footer from "../Footer";
import Header from "../Header";
import FeatureSection from "../FeatureSection";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <FeatureSection />
      <Footer />
    </div>
  );
};

export default Layout;
