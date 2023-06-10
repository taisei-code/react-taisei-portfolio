import "./css/reset.css";
import "./css/style.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <div className="App">

        <Header />
        <HomePage />
        <Footer />  

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>

        {/* <Footer /> */}
        
      </div>
    </Router>
  );
}

export default App;