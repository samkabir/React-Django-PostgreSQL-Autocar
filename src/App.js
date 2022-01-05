import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";


function App() {
  return (
    <>
        <BrowserRouter>
          <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
