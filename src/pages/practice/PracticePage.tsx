import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { SentenceBuilder } from "@/features/sentences/components/SentenceBuilder"
import { getWordSentences } from "@/features/sentences/api/getWordSentences"
import type { Sentence } from "@/features/sentences/types/sentence"
import { getWords } from "@/features/words/api/getWords"
import type { Word } from "@/features/words/types/word"
import styles from "./PracticePage.module.css"

export function PracticePage() {
  const { wordId } = useParams()
  const numericWordId = Number(wordId)

  const [sentences, setSentences] = useState<Sentence[]>([])
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
        const [sentencesData, wordsData] = await Promise.all([
          getWordSentences(numericWordId),
          getWords(),
        ])

        const matchedWord = wordsData.find((item) => item.id === numericWordId)

        if (!matchedWord) {
          throw new Error("Word not found")
        }

        setSentences(sentencesData)
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

  if (error || !word || sentences.length === 0) {
    return <div className={styles.container}>Lesson not found</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.wordHeader}>
        <h1 className={styles.word}>{word.text}</h1>
        <p className={styles.translation}>{word.translation}</p>
      </div>

      <SentenceBuilder sentences={sentences} />
    </div>
  )
}
