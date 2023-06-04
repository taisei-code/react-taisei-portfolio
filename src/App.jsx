import "./css/reset.css";
import "./css/style.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Skill from "./components/Skill";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skill" element={<Skill />}></Route>
          <Route path="/works" element={<Works />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;