
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import "./assets/style/global.scss";
import JobEdit from "./pages/JobEdit";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route  path="edit/:id" element={<JobEdit />} />
        <Route  path="edit" element={<JobEdit />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
