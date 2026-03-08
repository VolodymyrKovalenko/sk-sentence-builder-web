import { useParams } from "react-router-dom"
import { SentenceBuilder } from "@/features/exercises/components/SentenceBuilder"
import { mockLessons } from "@/features/exercises/data/mockLessons"
import { mockWords } from "@/features/words/data/mockWords"
import styles from "./PracticePage.module.css"

export function PracticePage() {
  const { wordId } = useParams()

  const numericWordId = Number(wordId)

  const lesson = mockLessons.find(
    (lesson) => lesson.wordId === numericWordId
  )

  const word = mockWords.find(
    (word) => word.id === numericWordId
  )

  if (!lesson || !word) {
    return <div>Lesson not found</div>
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