function Button({ children, type = "submit", loading }) {
  return (
    <button
      type={type}
      disabled={loading}
      className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:bg-gray-400"
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}

export default Button;