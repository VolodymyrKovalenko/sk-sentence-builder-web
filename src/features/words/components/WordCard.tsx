import { Link } from "react-router-dom"
import styles from "./WordCard.module.css"

type WordCardProps = {
  id: number
  value: string
  translation: string
  level: string
}

export function WordCard({ id, value, translation, level }: WordCardProps) {
  return (
    <Link to={`/practice/${id}`} className={styles.card}>
      <span className={`${styles.level} ${styles["level" + level]}`}>
        {level}
      </span>

      <div className={styles.word}>{value}</div>
      <div className={styles.translation}>{translation}</div>
    </Link>
  )
}