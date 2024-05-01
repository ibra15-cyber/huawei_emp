import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-600 text-center py-5 lg:px-20">
      <h1 className="text-3xl lg:text-5xl text-white px-5 lg:px-0 py-2">
        Huawei Employees
      </h1>
      <nav className="flex flex-wrap list-none space-x-5 justify-center">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/add">
          <li>Add</li>
        </Link>

        <Link to="/about">
          <li>About</li>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
