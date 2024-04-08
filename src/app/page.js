"use client";

import Image from "next/image";
import { LOGO } from "@/app/constants";
import { useState } from "react";
import { cn } from "@/utils/utils";

export default function Home() {
  const [selectedFont, setSelectedFont] = useState("Inter");
  return (
    <div className={cn({ "font-lora": selectedFont === "Lora" }, { "font-inter": selectedFont === "Inter" }, { "font-inconsolata": selectedFont === "Inconsolata" })}>
      <header className={"flex items-center gap-x-[95.95px]"}>
        <img className={"h-[32px] w-[28.05px] md:h-[36.5px] md:w-[32px]"} src={"/logo.svg"} alt={"Dictionary logo"} />
        <nav className={"flex items-center"}>
          <button className={"group relative flex items-center gap-x-4"}>
            <span className={"text-[14px] font-bold text-carbon-fiber"}>{selectedFont}</span>
            <img src={"/icon-arrow-down.svg"} alt={"Arrow down"} />
            <ul className={"absolute right-0 top-5 hidden w-32 rounded border group-hover:block"}>
              <li onClick={() => setSelectedFont("Inter")}>Inter</li>
              <li onClick={() => setSelectedFont("Lora")}>Lora</li>
              <li onClick={() => setSelectedFont("Inconsolata")}>Inconsolata</li>
            </ul>
          </button>
          <svg className={"ml-4 mr-2"} width="1" height="32" viewBox="0 0 1 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1" height="32" fill="#E9E9E9" />
          </svg>

          <svg width="73" height="22" viewBox="0 0 73 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="1" width="40" height="20" rx="10" fill="#757575" />
            <circle cx="10" cy="11" r="7" fill="white" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M52 10.449C51.9985 12.8283 52.8017 15.1383 54.2791 17.0033C55.7566 18.8683 57.8214 20.1788 60.138 20.7218C62.4545 21.2647 64.8866 21.0082 67.039 19.994C69.1912 18.9797 70.9373 17.2673 71.9931 15.1352C62.5442 15.1352 57.858 10.4479 57.858 1C56.0984 1.87311 54.6177 3.22033 53.5827 4.88981C52.5476 6.5593 51.9995 8.48469 52 10.449Z"
              stroke="#757575"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </nav>
      </header>
      <main>
        <section>Search</section>
        <section>Display and Play Word</section>
        <section>Noun</section>
        <section>Verb</section>
      </main>
      <footer></footer>
    </div>
  );
}
