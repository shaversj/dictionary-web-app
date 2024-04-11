"use client";

export default function WordSection({ word, phonetic, phonetics }) {
  const audioURL = phonetics?.map((phonetic) => phonetic.audio).filter((audio) => audio !== "")[0];
  const audio = new Audio(audioURL);

  return (
    <>
      <section className={"flex items-center pt-6"}>
        <div>
          <h1 className={"text-[32px] font-bold md:text-[64px] md:leading-[77px] dark:text-white"}>{word}</h1>
          <span className={"pt-2 text-project-purple md:text-[24px] md:leading-[29px]"}>{phonetic}</span>
        </div>
        <button
          className={"ml-auto"}
          onClick={() => {
            audio.loop = false;
            audio.play();
          }}
        >
          <svg className={"group ml-auto h-[48px] w-[48px] md:h-[75px] md:w-[75px]"} viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className={"opacity-25 group-hover:opacity-100"} cx="37.5" cy="37.5" r="37.5" fill="#A445ED" />
            <path className={"fill-project-purple group-hover:fill-white"} fillRule="evenodd" clipRule="evenodd" d="M29 27V48L50 37.5L29 27Z" />
          </svg>
        </button>
      </section>
    </>
  );
}
