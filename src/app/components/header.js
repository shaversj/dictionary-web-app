"use client";

import { cn } from "@/utils/utils";
import { Switch } from "@headlessui/react";
import { useState } from "react";

export default function Header({ selectedFont, setSelectedFont }) {
  const [darkMode, setDarkMode] = useState(false);

  const font_table = {
    Inter: "Sans Serif",
    Lora: "Serif",
    Inconsolata: "Mono",
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <header className={"flex items-center gap-x-[95.95px]"}>
        <img className={"h-[32px] w-[28.05px] md:h-[36.5px] md:w-[32px]"} src={"/logo.svg"} alt={"Dictionary logo"} />
        <nav className={"ml-auto flex items-center"}>
          <button className={"group relative flex items-center gap-x-4"}>
            <span className={"text-[14px] font-bold text-carbon-fiber md:text-[18px] dark:text-white"}>{font_table[selectedFont]}</span>
            <img src={"/icon-arrow-down.svg"} alt={"Arrow down"} />
            <ul className={"absolute right-0 top-6 z-10 hidden w-[183px] space-y-4 rounded-xl border bg-white p-6 text-left text-[18px] group-hover:block dark:bg-gray2 dark:text-white"}>
              <li onClick={() => setSelectedFont("Inter")} className={cn("font-inter", { "font-bold": selectedFont === "Inter" })}>
                Sans Serif
              </li>
              <li onClick={() => setSelectedFont("Lora")} className={cn("font-lora", { "font-bold": selectedFont === "Lora" })}>
                Serif
              </li>
              <li onClick={() => setSelectedFont("Inconsolata")} className={cn("font-inconsolata", { "font-bold": selectedFont === "Inconsolata" })}>
                Mono
              </li>
            </ul>
          </button>
          <svg className={"ml-4 mr-2"} width="1" height="32" viewBox="0 0 1 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1" height="32" fill="#E9E9E9" />
          </svg>
          <div className={"flex gap-x-5"}>
            <Switch
              checked={darkMode}
              onChange={toggleDarkMode}
              className={`${darkMode ? "flex items-center bg-project-purple px-[1px]" : "flex items-center bg-bank-vault p-[1px]"}
          relative inline-flex w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${darkMode ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 ring-amber-200 transition duration-200 ease-in-out`}
              />
            </Switch>
            <svg className={"stroke-bank-vault dark:stroke-project-purple"} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 10.449C0.998458 12.8283 1.80169 15.1383 3.27914 17.0033C4.75659 18.8683 6.82139 20.1788 9.13799 20.7218C11.4545 21.2647 13.8866 21.0082 16.039 19.994C18.1912 18.9797 19.9373 17.2673 20.9931 15.1352C11.5442 15.1352 6.85799 10.4479 6.85799 1C5.09842 1.87311 3.61767 3.22033 2.58266 4.88981C1.54765 6.5593 0.999502 8.48469 1 10.449Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </nav>
      </header>
    </>
  );
}
