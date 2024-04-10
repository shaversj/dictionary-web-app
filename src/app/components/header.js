import { cn } from "@/utils/utils";

export default function Header({ selectedFont, setSelectedFont }) {
  const font_table = {
    Inter: "Sans Serif",
    Lora: "Serif",
    Inconsolata: "Mono",
  };

  return (
    <>
      <header className={"flex items-center gap-x-[95.95px]"}>
        <img className={"h-[32px] w-[28.05px] md:h-[36.5px] md:w-[32px]"} src={"/logo.svg"} alt={"Dictionary logo"} />
        <nav className={"ml-auto flex items-center"}>
          <button className={"group relative flex items-center gap-x-4"}>
            <span className={"text-[14px] font-bold text-carbon-fiber md:text-[18px]"}>{font_table[selectedFont]}</span>
            <img src={"/icon-arrow-down.svg"} alt={"Arrow down"} />
            <ul className={"absolute right-0 top-6 z-10 hidden w-[183px] space-y-4 rounded-xl border bg-white p-6 text-left text-[18px] group-hover:block"}>
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
    </>
  );
}
