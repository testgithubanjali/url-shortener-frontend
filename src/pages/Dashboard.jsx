import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import URLForm from "../components/URLForm";
import URLList from "../components/URLList";

import { getDashboardStats } from "../services/analytics";

function Dashboard() {
  const [stats, setStats] = useState({
    total_urls: 0,
    total_clicks: 0,
    active_links: 0,
  });

  useEffect(() => {
    async function loadStats() {
      try {
        const response = await getDashboardStats();

        setStats({
          total_urls: response.total_urls ?? 0,
          total_clicks: response.total_clicks ?? 0,
          active_links: response.active_links ?? 0,
        });
      } catch (error) {
        console.error(error);
        toast.error("Failed to load dashboard statistics");
      }
    }

    loadStats();
  }, []);

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
            value={stats.total_urls}
          />

          <StatsCard
            title="Total Clicks"
            value={stats.total_clicks}
          />

          <StatsCard
            title="Active Links"
            value={stats.active_links}
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