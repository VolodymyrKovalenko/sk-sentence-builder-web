import type { WordLesson } from "../types/exercise.types"

export const mockLessons: WordLesson[] = [
  {
    wordId: 1, // Dôležitý
    exercises: [
      {
        id: 1,
        words: ["detail", "Tento", "je", "dôležitý"],
        correctAnswer: ["Tento", "detail", "je", "dôležitý"],
      },
      {
        id: 2,
        words: ["deň", "dôležitý", "to", "Je"],
        correctAnswer: ["Je", "to", "dôležitý", "deň"],
      },
      {
        id: 3,
        words: ["dôležitý", "email", "Tento", "je"],
        correctAnswer: ["Tento", "email", "je", "dôležitý"],
      },
      {
        id: 4,
        words: ["je", "problém", "dôležitý", "Toto"],
        correctAnswer: ["Toto", "je", "dôležitý", "problém"],
      },
      {
        id: 5,
        words: ["dôležitý", "termín", "Tento", "je"],
        correctAnswer: ["Tento", "termín", "je", "dôležitý"],
      },
    ],
  },
  {
    wordId: 2, // Žehliť
    exercises: [
      {
        id: 6,
        words: ["košeľu", "Žehlím"],
        correctAnswer: ["Žehlím", "košeľu"],
      },
      {
        id: 7,
        words: ["budem", "žehliť", "Dnes"],
        correctAnswer: ["Dnes", "budem", "žehliť"],
      },
      {
        id: 8,
        words: ["žehliť", "Musím", "oblečenie"],
        correctAnswer: ["Musím", "žehliť", "oblečenie"],
      },
      {
        id: 9,
        words: ["Môžem", "žehliť", "teraz"],
        correctAnswer: ["Môžem", "žehliť", "teraz"],
      },
      {
        id: 10,
        words: ["žehliť", "nechcem", "Dnes"],
        correctAnswer: ["Dnes", "nechcem", "žehliť"],
      },
    ],
  },
  {
    wordId: 3, // Účet
    exercises: [
      {
        id: 11,
        words: ["účet", "Prosím"],
        correctAnswer: ["Prosím", "účet"],
      },
      {
        id: 12,
        words: ["účet", "si", "Dám"],
        correctAnswer: ["Dám", "si", "účet"],
      },
      {
        id: 13,
        words: ["platiť", "Môžeme", "účet"],
        correctAnswer: ["Môžeme", "platiť", "účet"],
      },
      {
        id: 14,
        words: ["účet", "Prosím", "prineste"],
        correctAnswer: ["Prosím", "prineste", "účet"],
      },
      {
        id: 15,
        words: ["zaplatím", "kartou", "Účet"],
        correctAnswer: ["Účet", "zaplatím", "kartou"],
      },
    ],
  },
  {
    wordId: 4, // Zaplatiť
    exercises: [
      {
        id: 16,
        words: ["zaplatiť", "Chcem"],
        correctAnswer: ["Chcem", "zaplatiť"],
      },
      {
        id: 17,
        words: ["Môžem", "zaplatiť", "kartou"],
        correctAnswer: ["Môžem", "zaplatiť", "kartou"],
      },
      {
        id: 18,
        words: ["zaplatiť", "účet", "Chcem"],
        correctAnswer: ["Chcem", "zaplatiť", "účet"],
      },
      {
        id: 19,
        words: ["teraz", "zaplatiť", "Môžeme"],
        correctAnswer: ["Môžeme", "zaplatiť", "teraz"],
      },
      {
        id: 20,
        words: ["hotovosťou", "zaplatiť", "Chcem"],
        correctAnswer: ["Chcem", "zaplatiť", "hotovosťou"],
      },
    ],
  },
  {
    wordId: 5, // Tanier
    exercises: [
      {
        id: 21,
        words: ["tanier", "Prosím"],
        correctAnswer: ["Prosím", "tanier"],
      },
      {
        id: 22,
        words: ["je", "Tanier", "čistý"],
        correctAnswer: ["Tanier", "je", "čistý"],
      },
      {
        id: 23,
        words: ["na", "je", "stole", "Tanier"],
        correctAnswer: ["Tanier", "je", "na", "stole"],
      },
      {
        id: 24,
        words: ["tanier", "nový", "Je"],
        correctAnswer: ["Je", "nový", "tanier"],
      },
      {
        id: 25,
        words: ["je", "veľký", "Tanier"],
        correctAnswer: ["Tanier", "je", "veľký"],
      },
    ],
  },
  {
    wordId: 6, // Nájsť
    exercises: [
      {
        id: 26,
        words: ["nájsť", "to", "Chcem"],
        correctAnswer: ["Chcem", "to", "nájsť"],
      },
      {
        id: 27,
        words: ["môžem", "nájsť", "Kde"],
        correctAnswer: ["Kde", "môžem", "nájsť"],
      },
      {
        id: 28,
        words: ["adresu", "nájsť", "Chcem"],
        correctAnswer: ["Chcem", "nájsť", "adresu"],
      },
      {
        id: 29,
        words: ["nájsť", "riešenie", "Chcem"],
        correctAnswer: ["Chcem", "nájsť", "riešenie"],
      },
    ],
  },
]