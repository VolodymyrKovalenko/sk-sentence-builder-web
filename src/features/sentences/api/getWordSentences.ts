import type { Sentence } from "../types/sentence"

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000"

export async function getWordSentences(wordId: number): Promise<Sentence[]> {
  const response = await fetch(`${API_BASE_URL}/words/${wordId}/sentences/`)

  if (!response.ok) {
    throw new Error("Failed to fetch sentences")
  }

  return response.json()
}