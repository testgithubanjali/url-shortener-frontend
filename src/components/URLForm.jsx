import { useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

function URLForm() {
  const [url, setUrl] = useState("");
  const [days, setDays] = useState(7);
  const [shortURL, setShortURL] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url) {
      toast.error("Please enter a URL");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/shorten", {
        original_url: url,
        expires_in_days: Number(days),
      });

      setShortURL(response.data.short_url);

      toast.success("Short URL Generated Successfully!");

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

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(shortURL);
    toast.success("Copied to Clipboard");
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
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
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
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Generating..." : "Generate Short URL"}
        </button>

      </form>

      {shortURL && (
        <div className="mt-8 rounded-lg border bg-gray-50 p-5">

          <h3 className="font-semibold mb-3">
            Generated URL
          </h3>

          <div className="flex gap-3">

            <input
              value={shortURL}
              readOnly
              className="flex-1 rounded-lg border p-3 bg-white"
            />

            <button
              onClick={copyToClipboard}
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