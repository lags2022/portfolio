import { useState, useEffect } from "react";

type useThemeSwitcherType = [string, (str: string) => void];

export const useThemeSwitcher = (): useThemeSwitcherType => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const mediaQuery = window.matchMedia(preferDarkQuery);
  const [mode, setMode] = useState("");
  useEffect(() => {
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPref) {
        //si hubiera una configuracion añadida con setItem en el localStorage
        let check = userPref === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
        if (check === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
      }
    };
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.localStorage.removeItem("theme");
    };
  }, []);

  //para configurar el localstorage
  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else if (mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};
