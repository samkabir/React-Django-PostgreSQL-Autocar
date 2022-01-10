import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";


function App() {
  return (
    <div>
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
