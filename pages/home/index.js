import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Header from "../../components/header";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import CallToActions from "../../components/home/home-5/CallToActions";

const HomePage = () => {
  return (
    <>
      <Seo pageTitle="Home-5" />
      <Header />

      <Hero />

      <CallToActions />

      <Footer />
    </>
  );
};

export default dynamic(() => Promise.resolve(HomePage), { ssr: false });
