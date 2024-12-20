import { Link } from "react-router-dom";
import Accordion from "../components/Accordion.jsx";

const first = {
  title: <p className="font-bold">Information</p>,
  content: (
    <>
      <p className="hover:underline ">
        <Link to="/about"> About us</Link>
      </p>
      <p className="hover:underline">
        <Link to="/faq">FAQ</Link>
      </p>
    </>
  ),
};
const second = {
  title: <p className="font-bold">Policies</p>,
  content: (
    <>
      <p className="hover:underline">
        <Link to="/terms">Terms of use</Link>
      </p>
      <p className="hover:underline ">
        <Link to="/privacy">Privacy policy</Link>
      </p>
    </>
  ),
};
const third = {
  title: <p className="font-bold">Payment methods</p>,
  content: (
    <>
      <p className="hover:underline">
        <Link>BBVA</Link>
      </p>
    </>
  ),
};

function SmContent() {
  return (
    <div className="flex flex-col ">
      <Accordion title={first.title} content={first.content} />
      <Accordion title={second.title} content={second.content} />
      <Accordion title={third.title} content={third.content} />
    </div>
  );
}

function MdContent() {
  return (
    <div className="flex justify-evenly w-full">
      <div className="flex-col">
        {first.title}
        {first.content}
      </div>
      <div className="flex-col">
        {second.title}
        {second.content}
      </div>
      <div className="flex-col">
        {third.title}
        {third.content}
      </div>
    </div>
  );
}

export default function FooterLinks() {
  return (
    <>
      <div className="md:hidden w-full">
        <SmContent />
      </div>
      <div className="hidden md:block justify-evenly w-full ">
        <MdContent />
      </div>
    </>
  );
}
