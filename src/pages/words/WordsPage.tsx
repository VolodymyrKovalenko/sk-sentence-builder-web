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
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroTop}>Daily practice</div>
          <h1 className={styles.title}>Today’s Slovak words</h1>
          <p className={styles.subtitle}>
            Learn useful vocabulary in short, focused sessions. Review meanings,
            notice patterns, and build consistency one day at a time.
          </p>
        </section>

        <section className={styles.wordsSection}>
          <div className={styles.sectionHeader}>
            <h2>Word collection</h2>
            <span className={styles.wordsCount}>{words.length} items</span>
          </div>

          <div className={styles.grid}>
            {words.map((word) => (
                <WordCard
                    key={word.id}
                    id={word.id}
                    value={word.text}
                    translation={word.translation}
                    level={word.level}
                />
            ))}
          </div>
        </section>
      </div>
  )
}