import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import "./App.css"


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
