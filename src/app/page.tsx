"use client";

import Header from "@/components/layout/header";
import Main from "@/components/layout/main";
import Footer from "@/components/layout/footer";
import { useEffect } from "react";

import OnTheTop from "@/components/parts/main/onthetop";

export default function Home() {
  // Read localStorage only on client side after mount
  useEffect(() => {
    const getTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    let currentTheme: "light" | "dark";
    if (!getTheme) {
      // 로컬 스토리지에 없으면 prefrersDark에 따름
      currentTheme = prefersDark ? "dark" : "light";
    } else {
      currentTheme = getTheme === "dark" ? "dark" : "light";
    }
    localStorage.setItem("theme", currentTheme);
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
      <OnTheTop />
    </>
  );
}
