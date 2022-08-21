import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import WebFooter from "./Components/Other/WebFooter";
import WebNavbar from "./Components/Other/WebNavbar";
import Service from "./Components/Pages/Service";
import Courses from "./Components/Pages/Courses";
import NotFound from "./Components/Other/NotFound";
import Package from "./Components/Pages/Package";
import SignIn from "./Components/Authentication/SignIn";
import Signup from "./Components/Authentication/Signup";
import Contact from "./Components/Other/Contact";

function App() {
  return (
    <div>
      <WebNavbar />
      {/* Routes */}
      <div>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/package" element={<Package />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <WebFooter />
    </div>
  );
}

export default App;
