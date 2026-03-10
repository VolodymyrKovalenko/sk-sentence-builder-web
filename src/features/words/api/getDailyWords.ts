import type { Word } from "../types/word.ts"

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000"

export async function getDailyWords(): Promise<Word[]> {
  const response = await fetch(`${API_BASE_URL}/words/daily/`)

  if (!response.ok) {
    throw new Error("Failed to fetch daily words")
  }

  return response.json()
}