import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
<<<<<<< HEAD
=======
import "./App.css"
>>>>>>> 37c80afb5c8b4ddae05542488e195bbd3a0a3266


function App() {
  return (
    <div className="">
        <BrowserRouter>
          <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
