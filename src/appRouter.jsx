// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import NavLayout from "./components/navLayout.jsx"

import { BrowserRouter, Route, Routes } from "react-router"
// import Layout from "./pages/Layout.jsx"
// import Home from "./pages/home.jsx"
import Home from "./pages/home.jsx"
import About from "./pages/about.jsx"
import Header from "./components/header.jsx"
import Footer from "./components/footer.jsx"
import PageNotFound from "./pages/pageNotFound.jsx"
import LodgingPage from "./pages/lodgingPage.jsx"

const AppRouter = () => {
  return (
    <BrowserRouter>
    <div className="main-container"> 
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
          
      <Route path="lodgings/:id" element={<LodgingPage />} />

      <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div> 
      <Footer/>
  </BrowserRouter>
    )
}

export default AppRouter
