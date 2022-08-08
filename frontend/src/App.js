import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/style/global.scss";
import JobEdit from "./pages/JobEdit";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="edit/:id" element={<JobEdit />} />
          <Route path="edit" element={<JobEdit />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
