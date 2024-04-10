export default function WordSection({ word, phonetic }) {
  return (
    <>
      <section className={"flex items-center pt-6"}>
        <div>
          <h1 className={"text-[32px] font-bold"}>{word}</h1>
          <span className={"pt-2 text-project-purple"}>{phonetic}</span>
        </div>
        <img className={"ml-auto h-[48px] w-[48px]"} src={"/icon-play.svg"} alt={"Audio"} />
      </section>
    </>
  );
}
