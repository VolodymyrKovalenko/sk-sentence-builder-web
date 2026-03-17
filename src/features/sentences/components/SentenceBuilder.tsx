import { useMemo, useState } from "react"
import styles from "./SentenceBuilder.module.css"
import { ProgressBar } from "@/shared/components/ProgressBar/ProgressBar"
import type { Sentence } from "@/features/sentences/types/sentence"
import { useNavigate } from "react-router-dom"

type SentenceBuilderProps = {
  sentences: Sentence[]
}

export function SentenceBuilder({ sentences }: SentenceBuilderProps) {
  const navigate = useNavigate()
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0)
  const [selectedWords, setSelectedWords] = useState<string[]>([])
  const [result, setResult] = useState<string | null>(null)
  const [isFinished, setIsFinished] = useState(false)
  const [wrongAttempts, setWrongAttempts] = useState(0)

  const currentSentence = sentences[currentSentenceIndex]

  const availableWords = useMemo(() => {
    const words = [...currentSentence.words]

    selectedWords.forEach((selectedWord) => {
      const index = words.indexOf(selectedWord)
      if (index !== -1) {
        words.splice(index, 1)
      }
    })

    return words
  }, [currentSentence.words, selectedWords])

  const addWord = (word: string) => {
    setSelectedWords((prev) => [...prev, word])
    setResult(null)
  }

  const removeWord = (index: number) => {
    setSelectedWords((prev) => prev.filter((_, i) => i !== index))
    setResult(null)
  }

  const goToNextSentence = () => {
    const nextIndex = currentSentenceIndex + 1

    if (nextIndex >= sentences.length) {
      setIsFinished(true)
      setResult("🎉 Great job! You completed all sentences.")
      return
    }

    setCurrentSentenceIndex(nextIndex)
    setSelectedWords([])
    setResult(null)
    setWrongAttempts(0)
  }

  const checkAnswer = () => {
    const isCorrect =
      JSON.stringify(selectedWords) ===
      JSON.stringify(currentSentence.correct_order)

    if (isCorrect) {
      setResult("✅ Correct!")
      setWrongAttempts(0)

      setTimeout(() => {
        goToNextSentence()
      }, 500)
    } else {
      setResult("❌ Try again")
      setWrongAttempts((prev) => prev + 1)
    }
  }

  const resetCurrent = () => {
    setSelectedWords([])
    setResult(null)
  }

  if (sentences.length === 0) {
    return <div className={styles.container}>No sentences found</div>
  }

  if (isFinished) {
    return (
      <div className={styles.container}>
        <div className={styles.result}>{result}</div>

        <div className={styles.summary}>
          <h3 className={styles.summaryTitle}>You studied:</h3>

          <div className={styles.summaryList}>
            {sentences.map((sentence) => (
              <div key={sentence.id} className={styles.summaryItem}>
                {sentence.text}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <button
            className={styles.navButton}
            onClick={() => navigate("/")}
          >
            ← Back to words
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

      {wrongAttempts >= 5 ? (
        <div className={styles.hint}>
          💡 The sentence is: <strong>{currentSentence.text}</strong>
        </div>
      ) : wrongAttempts >= 3 ? (
        <div className={styles.hint}>
          💡 First word is: <strong>{currentSentence.first_word}</strong>
        </div>
      ) : wrongAttempts >= 1 ? (
        <div className={styles.hint}>
          💡 First word starts with: <strong>{currentSentence.first_word[0]}</strong>
        </div>
      ) : null}

      <ProgressBar
        total={sentences.length}
        completed={currentSentenceIndex}
      />
    </div>
  )
}
