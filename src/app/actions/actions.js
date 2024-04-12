"use server";

import { z } from "zod";

const schema = z.object({
  word: z.string().trim().min(1),
});

export async function fetchWord(prevState, formData) {
  const validatedWord = schema.safeParse({
    word: formData.get("word"),
  });

  if (!validatedWord.success) {
    return {
      success: false,
      message: validatedWord.error.message,
    };
  }

  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${validatedWord.data.word}`);
  return await response.json();
}
