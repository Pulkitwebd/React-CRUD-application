import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Contact from "./component/Contact";
import Home from "./component/Home";
import About from "./component/About";
import Navabar from "./component/Navbar";
import User from "./crudfiles/User";
import Edit from "./crudfiles/Edit";
import Add from "./crudfiles/Add";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navabar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exaxt path="/add" element={<Add />} />
          <Route exact path="/users/:id" element={<User />} />
          <Route exact path="/edit/:id" element={<Edit />} />
          <Route>Page Not Found</Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
