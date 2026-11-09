import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage.jsx'
import SearchPage from './pages/SearchPage.jsx'
import ResultPage from './pages/ResultPage.jsx'
import DetailPage from './pages/DetailPage.jsx'

/**
 * 화면 주소 (Figma: 3-4.완성본 › Mobile)
 *   /        메인            (Mobile-Main)
 *   /search  전시해설 일정찾기 (Mobile-Search / Mobile-SearchError)
 *   /result  검색결과         (Mobile-Result)  예) /result?branch=서소문 본관&date=2026-10-13
 *   /detail  상세페이지       (Mobile-DetailPage)
 */
function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
