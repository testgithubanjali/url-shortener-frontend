import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getURLs, deleteURL } from "../services/url";

function URLList() {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function loadURLs() {
      try {
        setLoading(true);

        const response = await getURLs();

        if (ignore) return;

        if (Array.isArray(response)) {
          setUrls(response);
        } else {
          setUrls(response.urls || []);
        }
      } catch (error) {
        console.error(error);

        if (!ignore) {
          toast.error("Failed to load URLs");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadURLs();

    return () => {
      ignore = true;
    };
  }, []);

  async function refreshURLs() {
    try {
      setLoading(true);

      const response = await getURLs();

      if (Array.isArray(response)) {
        setUrls(response);
      } else {
        setUrls(response.urls || []);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to refresh URLs");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteURL(id);

      toast.success("URL deleted successfully");

      await refreshURLs();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete URL");
    }
  }

  function copyURL(shortCode) {
    const shortURL = `http://localhost:8081/${shortCode}`;

    navigator.clipboard.writeText(shortURL);

    toast.success("Copied to clipboard");
  }

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
        <p className="text-center text-gray-500">
          Loading URLs...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
      <h2 className="text-2xl font-bold mb-6">
        Recent URLs
      </h2>

      {urls.length === 0 ? (
        <p className="text-center text-gray-500">
          No URLs Found
        </p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Short URL</th>
              <th className="text-left py-3">Original URL</th>
              <th className="text-center py-3">Clicks</th>
              <th className="text-center py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {urls.map((url) => (
              <tr key={url.id} className="border-b hover:bg-gray-50">
                <td className="py-4 text-blue-600 font-medium">
                  {url.short_code}
                </td>

                <td className="py-4 max-w-sm truncate">
                  {url.original_url}
                </td>

                <td className="text-center">
                  {url.click_count}
                </td>

                <td className="py-4 flex justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => copyURL(url.short_code)}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                  >
                    Copy
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(url.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default URLList;