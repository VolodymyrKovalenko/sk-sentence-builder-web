import { mockWords } from "@/features/words/data/mockWords"
import { WordCard } from "@/features/words/components/WordCard"
import styles from "./WordsPage.module.css"

export function WordsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Select a word to practice</h1>

      <div className={styles.grid}>
        {mockWords.map((word) => (
          <WordCard
            key={word.id}
            id={word.id}
            value={word.value}
            translation={word.translation}
          />
        ))}
      </div>
    </div>
  )
}