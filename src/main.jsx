import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import FAQ from "./pages/FAQ.jsx";
import Footer from "./layout/Footer.jsx";
import Header from "./layout/Header.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import Cart from "./pages/Cart.jsx";
import Notifications from "./pages/Notifications.jsx";
import Profile from "./pages/Profile.jsx";

export default function Main() {
  return (
    <Router>
      <Header />

      <main className="md:min-h-[calc(100vh-14rem)] min-h-[calc(100vh-24rem)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
