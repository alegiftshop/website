import { SiLinktree } from "react-icons/si";
import getYear from "../functions/getYear";
import { Link } from "react-router-dom";

export default function Footer() {

  const year = getYear();
  return (
    <footer>
      <div
        title="Location"
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <select
          style={{ border: "none", fontSize: "0.9rem", cursor: "pointer" }}
          name="language"
          id="language-select"
        >
          <option value="English">EN</option>
          <option value="Spanish">ES</option>
        </select>

        <Link to="/about" className="text-underline">
          About
        </Link>
        <Link to="/privacy" className="text-underline">
          Privacy
        </Link>
        <Link to="/terms" className="text-underline">
          Terms
        </Link>
      </div>

      <div>
        &copy;&nbsp;{year}&nbsp;Alé, Inc.&nbsp;
        <a
          href="https://linktr.ee/alegiftshop"
          target="_blank"
          title="Linktree"
          style={{ fontSize: "23px", color:"lime" }}
        >
          <SiLinktree />
        </a>
      </div>
    </footer>
  );
}
