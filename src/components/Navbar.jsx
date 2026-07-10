import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-600">
          URL Shortener
        </h1>

        <div className="flex gap-6 items-center">

          <Link
            to="/dashboard"
            className="hover:text-blue-600"
          >
            Dashboard
          </Link>

          <Link
            to="/analytics"
            className="hover:text-blue-600"
          >
            Analytics
          </Link>

          <Link
            to="/profile"
            className="hover:text-blue-600"
          >
            Profile
          </Link>

          <button
            onClick={logout}
            className="bg-red-600 px-4 py-2 rounded-lg text-white hover:bg-red-700"
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;