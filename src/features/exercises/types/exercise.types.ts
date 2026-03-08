export type Exercise = {
  id: number
  words: string[]
  correctAnswer: string[]
}

export type WordLesson = {
  wordId: number
  exercises: Exercise[]
}