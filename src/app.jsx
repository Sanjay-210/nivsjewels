import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Index from "../pages";
import About from "../pages/about";


const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>        
      {/* <Route path="/" element={<Index />} />         */}
      {/* <Route path="/" element={<About />} />         */}
      {/* <Route path="*" element={<Error404 />} /> Fallback route for 404 */}

    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App;

