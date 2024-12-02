import { Link } from "react-router-dom";

export default function FooterLinks() {
  return (
    <div className="flex flex-col md:flex-row justify-evenly w-full">
      <ul>
        <li className="font-bold">Sections</li>
        <li className="hover:underline ">
          <Link to="/about"> About us</Link>
        </li>
        <li className="hover:underline ">
          <Link to="https://facebook.com">Facebook</Link>
        </li>
        <li className="hover:underline">
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
      <ul>
        <li className="font-bold">Information & Support</li>
        <li className="hover:underline">
          <Link to="/terms">Terms of use</Link>
        </li>
      </ul>
      <ul>
        <li className="font-bold">Payment methods</li>
        <li className="hover:underline">
          <Link>bbva</Link>
        </li>
      </ul>
    </div>
  );
}
