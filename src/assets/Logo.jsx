import logo from "./logo.svg";

export default function Logo() {
  return (
    <div className="flex flex-row items-center w-[100px]">
      <img src={logo} alt="Logo"/>
    </div>
  )
}
