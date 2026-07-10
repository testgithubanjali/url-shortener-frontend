import { useState } from "react";

function URLForm() {
  const [url, setUrl] = useState("");

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full border p-3 rounded-lg"
      />

      <button
        type="button"
        onClick={() => alert("Button Clicked")}
        className="mt-4 w-full bg-blue-600 text-white p-3 rounded-lg"
      >
        Test Button
      </button>
    </div>
  );
}

export default URLForm;