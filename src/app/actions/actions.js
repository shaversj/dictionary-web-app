"use server";

export async function fetchWord(prevState, formData) {
  console.log(formData);
  const word = formData.get("word");

  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  return await response.json();
}
