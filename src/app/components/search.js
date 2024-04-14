import { cn } from "@/app/utils/utils";

export default function Search({ formAction, isValid = true }) {
  return (
    <section>
      <form
        action={formAction}
        className={cn(
          "flex h-[48px] w-full items-center rounded-2xl border border-white bg-lighthouse px-6",
          "focus-within:border focus-within:border-project-purple md:h-[64px] dark:border-gray2 dark:bg-umbra",
          { "border-project-red focus-within:border-project-red dark:border-project-red": !isValid },
        )}
      >
        <input
          type={"text"}
          name={"word"}
          placeholder={"Search for any word..."}
          className={cn(
            "w-full bg-lighthouse font-bold text-carbon-fiber outline-none outline-0 placeholder:bg-lighthouse",
            "placeholder:font-semibold placeholder:text-[#c2c2c2] md:text-[20px] dark:bg-umbra dark:text-white",
            "dark:placeholder:bg-umbra dark:placeholder:text-[#575757]",
          )}
        ></input>
        <button className={"ml-auto"} type={"submit"}>
          <img src={"/icon-search-old.svg"} alt={"search icon"} />
        </button>
      </form>
      {!isValid && <p className="pt-[4px] text-[14px] leading-[24px] text-project-red group-invalid:text-red-800">Whoops, can't be empty...</p>}
    </section>
  );
}
