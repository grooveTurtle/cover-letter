"use client";

import Header from "@/components/layout/header";
import Main from "@/components/layout/main";
import Footer from "@/components/layout/footer";
import { useEffect } from "react";
import { ThemeProvider } from "@/context/theme";

export default function Home() {
  useEffect(() => {
    const currentTheme = localStorage.getItem("hs_theme");

    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);

  return (
    <>
      <ThemeProvider>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  );
}
