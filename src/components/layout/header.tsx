"use client";

import Darkmode from "@/app/darkmode";
import { scrollToElement } from "@/utils/scroll";
import { useEffect, useState } from "react";
import { FaUserTie } from "react-icons/fa";

const sections = [
  { id: "main-profile", title: "Profile" },
  { id: "main-history", title: "History" },
  { id: "main-license", title: "License" },
  { id: "main-skill", title: "Skills" },
  { id: "main-career", title: "Career" },
  { id: "main-side-project", title: "Side Project" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + window.innerHeight / 3;
          let currentSection = sections[0].id;

          for (const section of sections) {
            const el = document.getElementById(section.id);
            if (el) {
              const { top, height } = el.getBoundingClientRect();
              const offsetTop = window.scrollY + top;
              const threshold =
                section.id === "main-license"
                  ? offsetTop + Math.max(height * 0.5, 100)
                  : offsetTop;
              if (scrollPosition >= threshold) {
                currentSection = section.id;
              }
            }
          }
          setActiveSection(currentSection);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm ">
      <nav className="mt-1 relative max-w-4xl w-full bg-gray-50 border border-gray-200 rounded-[2rem] mx-2 py-2.5 sm:flex sm:items-center sm:justify-between sm:py-0 sm:px-4 sm:mx-auto dark:bg-neutral-800 dark:border-neutral-600">
        <div className="px-4 sm:px-0 flex justify-between items-center">
          <div className="text-gray-800 dark:text-neutral-200">
            <FaUserTie size={24} />
          </div>

          {/* Mobile 햄버거 메뉴 */}
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle flex justify-center items-center size-6 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              id="hs-navbar-header-floating-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-header-floating-side"
              aria-label="Toggle navigation"
              onClick={() => {
                document
                  .getElementById("hs-navbar-header-floating-side")
                  ?.classList.toggle("translate-x-full");
              }}
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-3.5"
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
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden shrink-0 size-4"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <div
              id="hs-navbar-header-floating-side"
              className="fixed top-0 right-0 z-50 h-full w-64 bg-white dark:bg-neutral-900 shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col"
              style={{ transitionProperty: "transform" }}
            >
              <div className="flex justify-end p-4">
                <button
                  aria-label="Close menu"
                  className="text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  onClick={() => {
                    document
                      .getElementById("hs-navbar-header-floating-side")
                      ?.classList.add("translate-x-full");
                    document
                      .getElementById("hs-navbar-header-floating-overlay")
                      ?.classList.add("opacity-0");
                    document
                      .getElementById("hs-navbar-header-floating-overlay")
                      ?.classList.add("pointer-events-none");
                  }}
                >
                  <svg
                    className="size-6"
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
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col gap-2 px-6">
                {sections.map((section, index) => (
                  <a
                    key={index}
                    className={`py-2 px-2 rounded font-medium transition-colors ${
                      activeSection === section.id
                        ? "bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-800 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                    }`}
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement(section.id);
                      document
                        .getElementById("hs-navbar-header-floating-side")
                        ?.classList.add("translate-x-full");
                      document
                        .getElementById("hs-navbar-header-floating-overlay")
                        ?.classList.add("opacity-0");
                      document
                        .getElementById("hs-navbar-header-floating-overlay")
                        ?.classList.add("pointer-events-none");
                    }}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div
          id="hs-navbar-header-floating"
          className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
          aria-labelledby="hs-navbar-header-floating-collapse"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2 sm:gap-3 mt-3 sm:mt-0 py-2 sm:py-0 sm:ps-7">
            {sections.map((section, index) => {
              return (
                <a
                  key={index}
                  className={`py-0.5 sm:py-3 px-4 sm:px-1 border-s-2 sm:border-s-0 border-gray-800 font-medium focus:outline-none
                      ${
                        activeSection === section.id
                          ? "border-b-2 text-gray-800 dark:border-neutral-200 dark:text-neutral-200"
                          : "text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                      }
                    `}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToElement(section.id);
                  }}
                >
                  {section.title}
                </a>
              );
            })}
            <Darkmode />
          </div>
        </div>
      </nav>
    </header>
  );
}
