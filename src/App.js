import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

import "./App.css";
import AboutUs from "./Pages/About Us/AboutUs";
import ContactUs from "./Pages/Contact Us/ContactUs";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Cars from "./Pages/Cars/Cars";


function App() {
  return (
    <div>
        <BrowserRouter>
          <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cars" element={<Cars /> } />
                <Route path="/aboutUs" element={<AboutUs /> } />
                <Route path="/contactUs" element={<ContactUs /> } />
                <Route path="/login" element={<Login /> } />
                <Route path="/signUp" element={<SignUp /> } />
            </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
