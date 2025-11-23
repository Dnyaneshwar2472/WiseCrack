import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { FavoritesProvider } from "./context/FavoritesContext";

export default function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}
