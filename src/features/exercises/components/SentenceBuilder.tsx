import { useMemo, useState } from "react"
import styles from "./SentenceBuilder.module.css"
import { ProgressBar } from "@/shared/components/ProgressBar/ProgressBar.tsx"

type Exercise = {
  words: string[]
  correctAnswer: string[]
}

type SentenceBuilderProps = {
  exercises: Exercise[]
}

export function SentenceBuilder({ exercises }: SentenceBuilderProps) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
  const [selectedWords, setSelectedWords] = useState<string[]>([])
  const [result, setResult] = useState<string | null>(null)
  const [isFinished, setIsFinished] = useState(false)

  const currentExercise = exercises[currentExerciseIndex]

  const availableWords = useMemo(() => {
    const words = [...currentExercise.words]

    selectedWords.forEach((selectedWord) => {
      const index = words.indexOf(selectedWord)
      if (index !== -1) {
        words.splice(index, 1)
      }
    })

    return words
  }, [currentExercise.words, selectedWords])

  const addWord = (word: string) => {
    setSelectedWords((prev) => [...prev, word])
    setResult(null)
  }

  const removeWord = (index: number) => {
    setSelectedWords((prev) => prev.filter((_, i) => i !== index))
    setResult(null)
  }

  const goToNextExercise = () => {
    const nextIndex = currentExerciseIndex + 1

    if (nextIndex >= exercises.length) {
      setIsFinished(true)
      setResult("🎉 Great job! You completed all exercises.")
      return
    }

    setCurrentExerciseIndex(nextIndex)
    setSelectedWords([])
    setResult(null)
  }

  const checkAnswer = () => {
    const isCorrect =
      JSON.stringify(selectedWords) ===
      JSON.stringify(currentExercise.correctAnswer)

    if (isCorrect) {
      setResult("✅ Correct!")

      setTimeout(() => {
        goToNextExercise()
      }, 500)
    } else {
      setResult("❌ Try again")
    }
  }

  const resetCurrent = () => {
    setSelectedWords([])
    setResult(null)
  }

  const restartAll = () => {
    setCurrentExerciseIndex(0)
    setSelectedWords([])
    setResult(null)
    setIsFinished(false)
  }

  if (isFinished) {
    return (
      <div className={styles.container}>
        <div className={styles.result}>{result}</div>

        <div className={styles.controls}>
          <button className={styles.checkButton} onClick={restartAll}>
            Restart
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h2>Build the correct sentence:</h2>

      <div className={styles.answerBox}>
        {selectedWords.length === 0 && (
          <span className={styles.placeholder}>Click words below</span>
        )}

        {selectedWords.map((word, index) => (
          <button
            key={`${word}-${index}`}
            className={styles.word}
            onClick={() => removeWord(index)}
          >
            {word}
          </button>
        ))}
      </div>

      <div className={styles.wordBank}>
        {availableWords.map((word, index) => (
          <button
            key={`${word}-${index}`}
            className={styles.word}
            onClick={() => addWord(word)}
          >
            {word}
          </button>
        ))}
      </div>

      <div className={styles.controls}>
        <button className={styles.checkButton} onClick={checkAnswer}>
          Check
        </button>

        <button className={styles.resetButton} onClick={resetCurrent}>
          Reset
        </button>
      </div>

      {result && <div className={styles.result}>{result}</div>}

      <ProgressBar
        total={exercises.length}
        completed={currentExerciseIndex}
      />
    </div>
  )
}