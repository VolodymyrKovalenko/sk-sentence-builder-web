import styles from "./ProgressBar.module.css"

type ProgressBarProps = {
  total: number
  completed: number
}

export function ProgressBar({ total, completed }: ProgressBarProps) {
  return (
    <div className={styles.progressBar}>
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`${styles.segment} ${
            index < completed ? styles.segmentFilled : ""
          }`}
        />
      ))}
    </div>
  )
}