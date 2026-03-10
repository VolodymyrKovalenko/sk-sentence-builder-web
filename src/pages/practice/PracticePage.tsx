import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { SentenceBuilder } from "@/features/exercises/components/SentenceBuilder"
import { getPracticeLesson } from "@/features/exercises/api/getPracticeLesson"
import type { WordLesson } from "@/features/exercises/types/lesson"
import { getWords } from "@/features/words/api/getWords"
import type { Word } from "@/features/words/types/word"
import styles from "./PracticePage.module.css"

export function PracticePage() {
  const { wordId } = useParams()
  const numericWordId = Number(wordId)

  const [lesson, setLesson] = useState<WordLesson | null>(null)
  const [word, setWord] = useState<Word | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!numericWordId || Number.isNaN(numericWordId)) {
      setError("Invalid word id")
      setLoading(false)
      return
    }

    async function loadPracticePage() {
      try {
        const [lessonData, wordsData] = await Promise.all([
          getPracticeLesson(numericWordId),
          getWords(),
        ])

        const matchedWord = wordsData.find((item) => item.id === numericWordId)

        if (!matchedWord) {
          throw new Error("Word not found")
        }

        setLesson(lessonData)
        setWord(matchedWord)
      } catch {
        setError("Lesson not found")
      } finally {
        setLoading(false)
      }
    }

    loadPracticePage()
  }, [numericWordId])

  if (loading) {
    return <div className={styles.container}>Loading...</div>
  }

  if (error || !lesson || !word) {
    return <div className={styles.container}>Lesson not found</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.wordHeader}>
        <h1 className={styles.word}>{word.value}</h1>
        <p className={styles.translation}>{word.translation}</p>
      </div>

      <SentenceBuilder exercises={lesson.exercises} />
    </div>
  )
}