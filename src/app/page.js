"use client";

import { useState } from "react";
import { cn } from "@/utils/utils";
import { response } from "@/utils/rawData";
import { fetchWord } from "@/app/actions/actions";
import { useFormState } from "react-dom";
import Header from "@/app/components/header";
import Search from "@/app/components/search";
import WordSection from "@/app/components/wordsection";
import MeaningList from "@/app/components/meaningList";
import Footer from "@/app/components/footer";

const initialState = {
  message: "",
};

export default function Home({ word }) {
  const [selectedFont, setSelectedFont] = useState("Inter");
  const [state, formAction] = useFormState(fetchWord, initialState);
  const data = state[0] || response[0];

  return (
    <div className={cn({ "font-lora": selectedFont === "Lora" }, { "font-inter": selectedFont === "Inter" }, { "font-inconsolata": selectedFont === "Inconsolata" })}>
      <Header selectedFont={selectedFont} setSelectedFont={setSelectedFont} />
      <main className={"pt-6"}>
        <Search formAction={formAction} />
        <WordSection word={data?.word} phonetic={data?.phonetic} phonetics={data?.phonetics} />
        <MeaningList data={data} />
      </main>
      <Footer sourceUrls={data?.sourceUrls} />
    </div>
  );
}
