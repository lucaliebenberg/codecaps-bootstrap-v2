import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import HeroSection from "./components/HeroSection";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HeroSection />
      <Content />
      <Footer />
    </div>
  );
}
