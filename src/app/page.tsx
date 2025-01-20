"use client";

import Image from "next/image";
import Header from "@/component/layout/header";
import Main from "@/component/layout/main";
import Footer from "@/component/layout/footer";
import { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    const html: HTMLElement | null = document.querySelector("html");

    const isLightOrAuto =
      localStorage.getItem("hs_theme") === "light" ||
      (localStorage.getItem("hs_theme") === "auto" &&
        !window.matchMedia("(prefers-color-scheme: dark)").matches);
    const isDarkOrAuto =
      localStorage.getItem("hs_theme") === "dark" ||
      (localStorage.getItem("hs_theme") === "auto" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isLightOrAuto && html?.classList.contains("dark"))
      html?.classList.remove("dark");
    else if (isDarkOrAuto && html?.classList.contains("light"))
      html?.classList.remove("light");
    else if (isDarkOrAuto && !html?.classList.contains("dark"))
      html?.classList.add("dark");
    else if (isLightOrAuto && !html?.classList.contains("light"))
      html?.classList.add("light");
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
