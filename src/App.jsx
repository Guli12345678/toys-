import "./App.css";
import Category from "./components/category/Category";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Story from "./components/story/story";
import Stuffed from "./components/stuffed/Stuffed";
import SubHeader from "./components/subheader/SubHeader";
import Subscribe from "./components/subscribe/Subscribe";
import Template from "./components/template/Template";
import Wooden from "./components/wooden/Wooden";
import Instagram from "./components/instagram/Intagram";

function App() {
  return (
    <>
      <SubHeader />
      <Header />
      <main>
        <Hero />
        <Category />
        <Stuffed />
        <Wooden />
        <Story />
        <Template />
        <Subscribe />
        <Instagram />
      </main>
      <Footer />
    </>
  );
}

export default App;
