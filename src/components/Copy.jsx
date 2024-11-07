
export default function Copy() {
    let year = new Date().getFullYear();
  return (
    <div className="flex justify-center">
      <p>
        <br />
        &copy; {year}, The Local Company
      </p>
    </div>
  );
}

