import styles from "./LandingPage.module.css"
import { SentenceBuilder } from "@/features/sentences/components/SentenceBuilder"
import type { Sentence } from "@/features/sentences/types/sentence"

export default function LandingPage() {
  const features = [
    {
      title: "Learn with real Slovak sentences",
      text: "Practice vocabulary in context with short, natural sentences that feel useful in everyday life.",
      icon: "📝",
    },
    {
      title: "Build sentences step by step",
      text: "Reconstruct sentences from shuffled words and strengthen word order, grammar, and recall.",
      icon: "🧩",
    },
    {
      title: "Level-based practice",
      text: "Move from A1 to C1 with a clear structure and visible difficulty levels for every word.",
      icon: "📚",
    },
    {
      title: "Fast daily sessions",
      text: "Short focused sessions help you stay consistent without feeling overwhelmed.",
      icon: "⚡",
    },
  ]

  const stats = [
    { label: "Words", value: "300+" },
    { label: "Sentences", value: "1,500+" },
    { label: "Levels", value: "A1–C1" },
  ]

  const exampleSentence: Sentence = {
  id: 1,
  text: "Stanica je blízko centra.",
  words: ["blízko", "je", "Stanica", "centra"],
  correct_order: ["Stanica", "je", "blízko", "centra"],
  first_word: "Stanica"
}

  return (
    <div className={styles.landing}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>

          <div className={styles.heroText}>

            <h1>
              Learn Slovak through
              <span className={styles.accent}> words, sentences, </span>
              and real repetition.
            </h1>

            <p className={styles.subtitle}>
              A calm, modern learning app that helps you practice vocabulary in context,
              rebuild correct sentence order, and improve naturally one session at a time.
            </p>

            <div className={styles.heroButtons}>
              <a href="/words" className={styles.primaryButton}>
                Start practicing
              </a>

              <a href="#features" className={styles.secondaryButton}>
                See how it works
              </a>
            </div>

            <div className={styles.stats}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroCard}>
            <div className={styles.card}>

              <div className={styles.cardHeader}>
                <div>
                  <div className={styles.cardSubtitle}>Today’s practice</div>
                  <div className={styles.cardTitle}>
                    Word: {exampleSentence.first_word}
                  </div>
                </div>

                <div className={styles.levelBadge}>A2</div>
              </div>

              <SentenceBuilder sentences={[exampleSentence]} />

            </div>
          </div>

        </div>
      </section>

      <section id="features" className={styles.features}>
        <h2>Built for practical Slovak practice</h2>

        <p className={styles.featuresSubtitle}>
          Simple, focused, and structured to help you actually remember what you study.
        </p>

        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.featureCard}>
              <div className={styles.featureHeader}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
              </div>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Start building your Slovak habit today.</h2>

        <p>
          Learn with calm repetition, clear levels, and practical examples you can actually use.
        </p>

        <a href="/words" className={styles.primaryButton}>
          Start practicing
        </a>
      </section>
    </div>
  )
}
