"use client";

import { useState } from "react";
import { cn } from "@/app/utils/utils";
import { fetchWord } from "@/app/actions/actions";
import { useFormState } from "react-dom";
import Header from "@/app/components/header";
import Search from "@/app/components/search";
import WordSection from "@/app/components/wordsection";
import MeaningList from "@/app/components/meaningList";
import Footer from "@/app/components/footer";
import { localRawData } from "@/app/utils/data";

export default function Home() {
  const [selectedFont, setSelectedFont] = useState("Inter");
  const [state, formAction] = useFormState(fetchWord, { message: "" });
  const data = state[0] || localRawData[0];

  return (
    <div className={cn("bg-white dark:bg-gray2", { "font-lora": selectedFont === "Lora" }, { "font-inter": selectedFont === "Inter" }, { "font-inconsolata": selectedFont === "Inconsolata" })}>
      <Header selectedFont={selectedFont} setSelectedFont={setSelectedFont} />
      <main className={"pt-6"}>
        <Search formAction={formAction} isValid={state?.success} />
        <WordSection word={data?.word} phonetic={data?.phonetic} phonetics={data?.phonetics} />
        <MeaningList data={data} />
      </main>
      <Footer sourceUrls={data?.sourceUrls} />
    </div>
  );
}
