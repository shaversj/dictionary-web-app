export default function MeaningList({ data }) {
  return (
    <>
      {data && (
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
      )}
    </>
  );
}
