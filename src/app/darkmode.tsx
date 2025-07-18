import { useEffect, useState } from "react";

export default function Darkmode({ size = 7 }: { size?: number }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const [isHydrated, setIsHydrated] = useState(false);

  const sizeClassMap: { [key: number]: string } = {
    5: "size-5",
    6: "size-6",
    7: "size-7",
    8: "size-8",
    9: "size-9",
    10: "size-10",
    11: "size-11",
    12: "size-12",
    14: "size-14",
  };

  const sizeClass = sizeClassMap[size] || "size-7"; // 기본값 설정

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    setIsHydrated(true);

    const syncTheme = () => {
      const theme = localStorage.getItem("theme");
      setTheme(theme === "dark" ? "dark" : "light");
    };

    window.addEventListener("theme-changed", syncTheme);

    return () => {
      window.removeEventListener("theme-changed", syncTheme);
    };
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }

    window.dispatchEvent(new Event("theme-changed"));
  };

  if (!isHydrated) return null;
  return (
    <button
      type="button"
      className={`relative flex justify-center items-center border border-gray-200 text-gray-500 rounded-full 
      bg-gray-200 focus:outline-none hover:bg-gray-300
      dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-500 ${sizeClass}`}
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <>
          <span className="sr-only">Dark</span>
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        </>
      ) : (
        <>
          <span className="sr-only">Light</span>
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFD600"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" fill="#FFD600" />
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
        </>
      )}
    </button>
  );
}
