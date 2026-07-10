import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}

      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-blue-600">
            URL Shortener
          </h1>

          <div className="flex gap-6">

            <Link
              to="/analytics"
              className="text-gray-700 hover:text-blue-600"
            >
              Analytics
            </Link>

            <Link
              to="/profile"
              className="text-gray-700 hover:text-blue-600"
            >
              Profile
            </Link>

          </div>

        </div>
      </nav>

      {/* Main */}

      <div className="max-w-6xl mx-auto p-10">

        <h2 className="text-4xl font-bold">
          Dashboard
        </h2>

        <p className="text-gray-600 mt-2">
          Welcome to your URL Shortener Dashboard.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl shadow p-6">

            <h3 className="text-gray-500">
              Total URLs
            </h3>

            <p className="text-4xl font-bold mt-3">
              0
            </p>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <h3 className="text-gray-500">
              Total Clicks
            </h3>

            <p className="text-4xl font-bold mt-3">
              0
            </p>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <h3 className="text-gray-500">
              Active Links
            </h3>

            <p className="text-4xl font-bold mt-3">
              0
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;