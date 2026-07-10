import { useState } from "react";

function URLForm() {
  const [url, setUrl] = useState("");

  const handleClick = () => {
    alert("Button Works!");
  };

  return (
    <div className="bg-white rounded-xl shadow p-8">
      <h2 className="text-2xl font-bold mb-6">
        Shorten URL
      </h2>

      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com"
        className="w-full border rounded-lg p-3 mb-5"
      />

      <button
        type="button"
        onClick={handleClick}
        className="w-full bg-blue-600 text-white py-3 rounded-lg"
      >
        Generate Short URL
      </button>
    </div>
  );
}

export default URLForm;