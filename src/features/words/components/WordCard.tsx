import { Link } from "react-router-dom"
import styles from "./WordCard.module.css"

type WordCardProps = {
  id: number
  value: string
  translation: string
}

export function WordCard({ id, value, translation }: WordCardProps) {
  return (
    <Link to={`/practice/${id}`} className={styles.card}>
      <div className={styles.word}>{value}</div>
      <div className={styles.translation}>{translation}</div>
    </Link>
  )
}