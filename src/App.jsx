import "./css/reset.css";
import "./css/style.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;