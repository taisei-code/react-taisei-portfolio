import "./css/reset.css";
import "./css/style.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <Home />
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>

        <Contact />

        <Footer />
      </div>
    </Router>
  );
}

export default App;