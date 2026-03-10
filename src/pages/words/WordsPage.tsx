import { useEffect, useState } from "react"
import { WordCard } from "@/features/words/components/WordCard"
import { getDailyWords } from "@/features/words/api/getDailyWords"
import type { Word } from "@/features/words/types/word"
import styles from "./WordsPage.module.css"

export function WordsPage() {
  const [words, setWords] = useState<Word[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    getDailyWords()
      .then(setWords)
      .catch(() => setError("Could not load daily words"))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <div className={styles.container}>Loading daily words...</div>
  }

  if (error) {
    return <div className={styles.container}>{error}</div>
  }

  return (
    <div className={styles.container}>
<h1 className={styles.title}>Today's Words 📚</h1>
      <div className={styles.grid}>
        {words.map((word) => (
          <WordCard
            key={word.id}
            id={word.id}
            value={word.value}
            translation={word.translation}
            level={word.level}
          />
        ))}
      </div>
    </div>
  )
}