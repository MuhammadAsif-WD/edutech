import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import WebNavbar from "./Components/Other/WebNavbar";
import Service from "./Components/Pages/Service";

function App() {
  return (
    <div>
      <WebNavbar />
      {/* Routes */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
