import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './Drinks';
import Contact from './MainCourse';

export default function ArmaanCafe() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/Drinks">Drinks</Link> |{" "}
        <Link to="/MainCourse">Main Course</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Drinks" element={<About />} />
        <Route path="/MainCourse" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}