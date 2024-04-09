"use client";

import Image from "next/image";
import { LOGO } from "@/app/constants";
import { useState } from "react";
import { cn } from "@/utils/utils";
import { response } from "@/utils/rawData";
import Link from "next/link";

export default function Home() {
  const [selectedFont, setSelectedFont] = useState("Inter");
  const data = response[0];
  return (
    <div className={cn({ "font-lora": selectedFont === "Lora" }, { "font-inter": selectedFont === "Inter" }, { "font-inconsolata": selectedFont === "Inconsolata" })}>
      <header className={"flex items-center gap-x-[95.95px]"}>
        <img className={"h-[32px] w-[28.05px] md:h-[36.5px] md:w-[32px]"} src={"/logo.svg"} alt={"Dictionary logo"} />
        <nav className={"ml-auto flex items-center"}>
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
      <main className={"pt-6"}>
        <section className={"flex h-[48px] w-full items-center rounded-lg bg-lighthouse px-6"}>
          <input className={"bg-lighthouse font-bold text-carbon-fiber outline-0 placeholder:bg-lighthouse"}></input>
          <svg className={"ml-auto"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.193 12.1323C12.9001 11.8394 12.4252 11.8394 12.1323 12.1323C11.8394 12.4252 11.8394 12.9001 12.1323 13.193L13.193 12.1323ZM16.0199 17.0806C16.3128 17.3734 16.7877 17.3734 17.0806 17.0806C17.3734 16.7877 17.3734 16.3128 17.0806 16.0199L16.0199 17.0806ZM2.95195 12.3768L3.48231 11.8465L3.48226 11.8464L2.95195 12.3768ZM5.11403 13.8215L4.82696 14.5144L4.82704 14.5144L5.11403 13.8215ZM10.2147 13.8215L10.5017 14.5144L10.5018 14.5144L10.2147 13.8215ZM12.3768 12.3768L11.8465 11.8464L11.8464 11.8465L12.3768 12.3768ZM13.8215 10.2147L14.5144 10.5018L14.5144 10.5017L13.8215 10.2147ZM12.3768 2.95195L11.8464 3.48228L11.8465 3.4823L12.3768 2.95195ZM12.1323 13.193L16.0199 17.0806L17.0806 16.0199L13.193 12.1323L12.1323 13.193ZM0.25 7.66438C0.25 8.63802 0.441775 9.60213 0.814377 10.5017L2.20021 9.92773C1.90297 9.2101 1.75 8.44103 1.75 7.66438H0.25ZM0.814377 10.5017C1.18699 11.4014 1.73315 12.2187 2.42165 12.9071L3.48226 11.8464C2.93307 11.2973 2.49743 10.6453 2.20021 9.92773L0.814377 10.5017ZM2.4216 12.9071C3.11012 13.5957 3.92748 14.1417 4.82696 14.5144L5.40111 13.1286C4.68347 12.8313 4.03147 12.3957 3.48231 11.8465L2.4216 12.9071ZM4.82704 14.5144C5.72658 14.887 6.69075 15.0788 7.66438 15.0788V13.5788C6.88773 13.5788 6.1186 13.4258 5.40102 13.1286L4.82704 14.5144ZM7.66438 15.0788C8.63803 15.0788 9.60213 14.887 10.5017 14.5144L9.92776 13.1286C9.2101 13.4258 8.44102 13.5788 7.66438 13.5788V15.0788ZM10.5018 14.5144C11.4013 14.1417 12.2187 13.5956 12.9071 12.907L11.8464 11.8465C11.2973 12.3957 10.6453 12.8313 9.92767 13.1286L10.5018 14.5144ZM12.907 12.9071C13.5956 12.2187 14.1417 11.4013 14.5144 10.5018L13.1286 9.92767C12.8313 10.6453 12.3957 11.2973 11.8465 11.8464L12.907 12.9071ZM14.5144 10.5017C14.887 9.60213 15.0788 8.63803 15.0788 7.66438H13.5788C13.5788 8.44102 13.4258 9.2101 13.1286 9.92776L14.5144 10.5017ZM15.0788 7.66438C15.0788 5.69797 14.2977 3.81209 12.9071 2.4216L11.8465 3.4823C12.9557 4.59145 13.5788 6.09578 13.5788 7.66438H15.0788ZM12.9071 2.42163C11.5167 1.03116 9.6308 0.25 7.66438 0.25V1.75C9.23297 1.75 10.7373 2.37312 11.8464 3.48228L12.9071 2.42163ZM7.66438 0.25C5.69796 0.25 3.81209 1.03115 2.42162 2.42162L3.48228 3.48228C4.59145 2.37312 6.09579 1.75 7.66438 1.75V0.25ZM2.42162 2.42162C1.03115 3.81209 0.25 5.69796 0.25 7.66438H1.75C1.75 6.09579 2.37312 4.59145 3.48228 3.48228L2.42162 2.42162Z"
              fill="#A445ED"
            />
          </svg>
        </section>

        <section className={"flex items-center pt-6"}>
          <div>
            <h1 className={"text-[32px] font-bold"}>{data.word}</h1>
            <span className={"pt-2 text-project-purple"}>{data.phonetic}</span>
          </div>
          <img className={"ml-auto h-[48px] w-[48px]"} src={"/icon-play.svg"} alt={"Audio"} />
        </section>

        <section>
          {data.meanings.map((meaning, index) => (
            <article key={index + meaning}>
              <div className={"pt-[32px]"}>
                <div className={"flex items-center gap-x-4"}>
                  <h2 className={"text-[18px] font-bold italic"}>{meaning.partOfSpeech}</h2>
                  <div className={"h-[1px] w-full bg-plaster"}></div>
                </div>
                <div>
                  <h3 className={"pt-[32px] text-bank-vault"}>Meaning</h3>
                  <ul className={"ml-[18px] list-outside list-disc space-y-[13px]"}>
                    {meaning.definitions.map((def, index) => (
                      <li key={index} className={"text-[15px] leading-[24px] text-carbon-fiber marker:text-project-purple first:pt-[17px]"}>
                        {def.definition}
                        {def.example && (
                          <>
                            <span className={"block pt-[13px] text-[15px] text-bank-vault"}>"{def.example}"</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>

                  {meaning.synonyms.length > 0 && (
                    <>
                      <div className={"flex gap-x-6 pt-6"}>
                        <span className={"text-bank-vault"}>Synonyms</span>
                        <span className={"font-bold text-project-purple"}>{meaning.synonyms}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
      <footer className={"pb-[85px]"}>
        <div className={"mt-[32px] h-[1px] w-full bg-plaster"}></div>
        <div className={"pt-6"}>
          <span className={"text-[15px] text-bank-vault"}>Source</span>
          <Link className={"block"} href={data.sourceUrls}>
            <span className={"text-carbon-fiber"}>{data.sourceUrls}</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
