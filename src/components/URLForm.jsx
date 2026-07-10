import { useState } from "react";
import toast from "react-hot-toast";

import { shortenURL } from "../services/url";

function URLForm() {
  const [url, setUrl] = useState("");
  const [days, setDays] = useState(7);
  const [loading, setLoading] = useState(false);
  const [shortURL, setShortURL] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url.trim()) {
      toast.error("Please enter a URL");
      return;
    }

    try {
      setLoading(true);

      const response = await shortenURL({
        original_url: url,
        expires_in_days: Number(days),
      });

      setShortURL(response.short_url);

      toast.success("Short URL Generated!");

      setUrl("");
      setDays(7);
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.error || "Failed to shorten URL"
      );
    } finally {
      setLoading(false);
    }
  };

  const copyURL = async () => {
    try {
      await navigator.clipboard.writeText(shortURL);
      toast.success("Copied to clipboard!");
    } catch {
      toast.error("Failed to copy URL");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">
        Shorten URL
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label className="block mb-2 font-medium">
            Original URL
          </label>

          <input
            type="url"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Expiration (Days)
          </label>

          <input
            type="number"
            min="1"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? "Generating..." : "Generate Short URL"}
        </button>

      </form>

      {shortURL && (
        <div className="mt-8 rounded-lg border border-green-300 bg-green-50 p-5">

          <h3 className="text-lg font-semibold mb-3">
            Generated Short URL
          </h3>

          <div className="flex gap-3">

            <input
              type="text"
              readOnly
              value={shortURL}
              className="flex-1 rounded-lg border border-gray-300 p-3 bg-white"
            />

            <button
              type="button"
              onClick={copyURL}
              className="rounded-lg bg-green-600 px-5 text-white hover:bg-green-700"
            >
              Copy
            </button>

          </div>

        </div>
      )}
    </div>
  );
}

export default URLForm;