import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeComponent from "./components/HomeComponent";
// import Shop from "./pages/Shop";
// import Blog from "./pages/Blog";
// import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

library.add(fab, fas, far);

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          {/* <Route path="/Shop" element={<Shop />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
