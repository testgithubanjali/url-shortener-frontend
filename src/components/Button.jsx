

function Button({
  children,
  type = "submit",
  loading = false,
  disabled = false,
  onClick,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading || disabled}
      className="
        w-full
        rounded-lg
        bg-blue-600
        px-4
        py-3
        font-semibold
        text-white
        transition
        duration-200
        hover:bg-blue-700
        active:scale-95
        cursor-pointer
        disabled:bg-gray-400
        disabled:cursor-not-allowed
      "
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}

export default Button;