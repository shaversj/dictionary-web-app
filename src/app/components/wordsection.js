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
          <img className={"ml-auto h-[48px] w-[48px] md:h-[75px] md:w-[75px]"} src={"/icon-play.svg"} alt={"Audio"} />
        </button>
      </section>
    </>
  );
}