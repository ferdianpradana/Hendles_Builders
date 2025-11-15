"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    Aos.init({ once: true, duration: 1000, easing: "ease-in-out" });
  }, []);
  return null;
}
