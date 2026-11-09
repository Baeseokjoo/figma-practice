import { useNavigate, useSearchParams } from 'react-router-dom'
import NavTopPage from '../components/navigation/NavTopPage.jsx'
import TopNav from '../components/sets/TopNav.jsx'
import Result from '../components/sets/Result.jsx'
import ResultCard from '../components/sets/ResultCard.jsx'
import MainpageBtn from '../components/button/MainpageBtn.jsx'
import { desktopMenus } from './menu.js'
import './ResultPage.css'

/**
 * 검색결과
 *   모바일 — Figma: Mobile-Result (365:1204): ← 검색결과 상단바 + 결과 카드 + 메인화면 버튼
 *   데스크탑 — Figma: Desktop-Resalt (468:8436): 상단 메뉴바 + 경로(전시해설 > 일정찾기 > 검색결과) + 결과 표
 * 검색 조건은 주소에서 읽는다: /result?branch=서소문 본관&date=2026-10-13
 * (조건이 없으면 시안 값 '서소문 본관 / 2026-10-13')
 * 일정 데이터를 받아올 곳(API)이 아직 정해지지 않아 결과 목록은 시안 내용으로 고정했다.
 */
const results = [
  {
    number: '1회차',
    title: '2026 한국 근대 거장전 《유영국: 산은 내 안에 있다》',
    time: '오전 11:00',
    place: '1층 전시실',
    sub: '*현장접수 (오전 10시부터 선착순 20명)',
    href: `${import.meta.env.BASE_URL}detail`,
    // 데스크탑 시안(Desktop-Resalt)의 문구
    desktop: { time: '오전\n11:00', place: '1층\n전시실', sub: '- 현장접수 (오전 10시부터)\n- 선착순 20명' },
  },
  {
    number: '2회차',
    title: '가나아트기획상설전 《기술의 저변》+천경자 상설전 《영혼을 울리는 바람을 향하여》  전시해설',
    time: '오후 14:00',
    place: '2층 상시전시실',
    sub: '*통합 도슨트 전시해설',
    desktop: { time: '오후\n14:00', place: '2층\n상시전시실', sub: '- 통합 도슨트 전시해설' },
  },
]

function toKoreanFullDate(dateText) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateText)
  if (!m) return dateText
  return `${m[1]}년 ${Number(m[2])}월 ${Number(m[3])}일`
}

function ResultPage() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const branch = params.get('branch') || '서소문 본관'
  const date = params.get('date') || '2026-10-13'

  return (
    <div className="result-page">
      {/* 모바일 상단바 */}
      <div className="show-mobile">
        {/* Figma 프로토타입: 뒤로가기 → 일정찾기(Mobile-Search) — 고른 조건(미술관·날짜)을 그대로 가지고 감 */}
        <NavTopPage
          text="검색결과"
          onBack={() => navigate(`/search?${new URLSearchParams({ branch, date }).toString()}`)}
        />
      </div>

      {/* 데스크탑 상단 메뉴바 + Userflow */}
      <div className="show-desktop">
        <TopNav menus={desktopMenus} />
        <nav className="result-page__flow" aria-label="현재 위치">
          <ol role="list">
            <li className="result-page__flow-parent">전시해설</li>
            <li aria-hidden="true">&gt;</li>
            <li className="result-page__flow-parent">
              <a href={`/search?${new URLSearchParams({ branch, date }).toString()}`}>일정찾기</a>
            </li>
            <li aria-hidden="true">&gt;</li>
            <li className="result-page__flow-current" aria-current="page">
              검색결과
            </li>
          </ol>
        </nav>
      </div>

      <main className="result-page__list">
        <h1 className="result-page__hidden-title">검색결과</h1>
        <Result date={toKoreanFullDate(date)} place={branch} number={`${results.length}건`} />
        <div className="result-page__cards">
          {results.map((r) => (
            <ResultCard key={r.title} {...r} />
          ))}
        </div>
      </main>

      {/* 메인화면 버튼 — 모바일 시안에만 있음 */}
      <div className="result-page__home">
        <MainpageBtn />
      </div>
    </div>
  )
}

export default ResultPage
