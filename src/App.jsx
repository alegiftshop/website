import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Logo from "./assets/Logo.jsx";
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
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

export default function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const head =
    location.pathname === "/login" || location.pathname === "/register";
  return (
    <d>
      {head ? (
        <a href="/" title="Home" className="flex justify-center p-3">
          <Logo />
        </a>
      ) : (
        <Header />
      )}
      <main className="flex justify-center min-h-[calc(100vh-18rem)] md:min-h-[calc(100vh-15rem)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />}>
            <Route path="/product/:id" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </d>
  );
}
