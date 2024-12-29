import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/home.jsx"
import About from "./pages/about.jsx"
import LodgingPage from "./pages/lodgingPage.jsx"
import PageNotFound from "./pages/pageNotFound.jsx"
import Header from "./components/header.jsx"
import Footer from "./components/footer.jsx"

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
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter
