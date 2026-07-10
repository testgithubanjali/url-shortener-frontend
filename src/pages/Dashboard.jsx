import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import URLForm from "../components/URLForm";
import URLList from "../components/URLList";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="max-w-7xl mx-auto py-10 px-5">

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your shortened URLs
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <StatsCard
            title="Total URLs"
            value="0"
          />

          <StatsCard
            title="Total Clicks"
            value="0"
          />

          <StatsCard
            title="Active Links"
            value="0"
          />

        </div>

        <div className="mt-10">

          <URLForm />

        </div>

        <URLList />

      </div>

    </div>
  );
}

export default Dashboard;