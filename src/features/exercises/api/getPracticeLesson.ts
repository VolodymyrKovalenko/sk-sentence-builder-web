import type { WordLesson } from "../types/lesson"

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000"

export async function getPracticeLesson(wordId: number): Promise<WordLesson> {
  const response = await fetch(`${API_BASE_URL}/practice/${wordId}`)

  if (!response.ok) {
    throw new Error("Failed to fetch lesson")
  }

  return response.json()
}