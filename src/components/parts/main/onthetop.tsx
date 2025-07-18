import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function OnTheTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      aria-label="맨 위로 이동"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-8 bottom-8 z-50 text-white rounded-full px-3 py-3 shadow-lg border-none cursor-pointer transition-colors duration-200
      bg-gray-400/90 hover:bg-gray-500/90 dark:bg-gray-700/85 dark:hover:bg-gray-600"
    >
      <FaArrowUp />
    </button>
  );
}
