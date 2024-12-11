import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Footer from "./layout/Footer.jsx";
import Header from "./layout/Header.jsx";
import Cart from "./pages/Cart.jsx";
import Notifications from "./pages/Notifications.jsx";
import Profile from "./pages/Profile.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import FAQ from "./pages/FAQ.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfUse from "./pages/TermsOfUse.jsx";


export default function Main() {
  return (
    <Router>
      <Header />

      <main className="md:min-h-[calc(100vh-14rem)] min-h-[calc(100vh-24rem)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} >
            <Route path="/product/:id" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
