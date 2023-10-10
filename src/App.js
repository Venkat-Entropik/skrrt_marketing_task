import Context from "./Components/Context";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import BasicModal from "./Components/Model";
import Products from "./Components/Products";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <div className="App">
      <Context>
        <Home />
        <Products />
        <BasicModal />
        <Footer />
      </Context>
    </div>
  );
}
