import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="min-h-screen bg-gray-100">

      <nav className="bg-white shadow">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">

          <h1 className="text-2xl font-bold text-blue-600">
            Profile
          </h1>

          <Link
            to="/dashboard"
            className="text-blue-600 font-medium"
          >
            Dashboard
          </Link>

        </div>

      </nav>

      <div className="max-w-3xl mx-auto mt-10 bg-white rounded-xl shadow p-8">

        <div className="flex items-center gap-6">

          <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
            A
          </div>

          <div>

            <h2 className="text-3xl font-bold">
              Anjali Rani
            </h2>

            <p className="text-gray-500">
              anjali@example.com
            </p>

          </div>

        </div>

        <hr className="my-8" />

        <button
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Profile;