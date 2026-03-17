import styles from "./ProgressBar.module.css"

type ProgressBarProps = {
  total: number
  completed: number
  label?: string
}

export function ProgressBar({ total, completed, label = "Progress" }: ProgressBarProps) {
  const safeTotal = Math.max(total, 1)
  const safeCompleted = Math.min(Math.max(completed, 0), safeTotal)

  const percentage = Math.round((safeCompleted / safeTotal) * 100)

  return (
    <div className={styles.wrapper}>
      <div className={styles.topRow}>
        <span className={styles.label}>{label}</span>
        <span className={styles.text}>
          {percentage}%
        </span>
      </div>

      <div className={styles.progressBar}>
        {Array.from({ length: safeTotal }).map((_, index) => (
          <div
            key={index}
            className={`${styles.segment} ${
              index < safeCompleted ? styles.segmentFilled : ""
            }`}
          />
        ))}
      </div>
    </div>
  )
}