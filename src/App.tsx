import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@/shared/components/Layout/Layout"
import { WordsPage } from "@/pages/words/WordsPage"
import { PracticePage } from "@/pages/practice/PracticePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<WordsPage />} />
          <Route path="/practice/:wordId" element={<PracticePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App