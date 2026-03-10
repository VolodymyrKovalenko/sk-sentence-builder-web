import type { Word } from "../types/word.ts"

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000"

export async function getWords(): Promise<Word[]> {
  const response = await fetch(`${API_BASE_URL}/words/`)

  if (!response.ok) {
    throw new Error("Failed to fetch words")
  }

  return response.json()
}