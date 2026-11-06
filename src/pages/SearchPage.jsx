import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from '../components/sets/TopNav.jsx'
import Calendar from '../components/sets/Calendar.jsx'
import ErrorInfo from '../components/sets/ErrorInfo.jsx'
import Nav from '../components/navigation/Nav.jsx'
import Form from '../components/form/Form.jsx'
import SelectList from '../components/form/SelectList.jsx'
import SearchBtn from '../components/button/SearchBtn.jsx'
import ResetBtn from '../components/button/ResetBtn.jsx'
import MuseumBtn from '../components/button/MuseumBtn.jsx'
import { navMenus, desktopMenus } from './menu.js'
import './SearchPage.css'

/**
 * 전시해설 일정찾기
 *   모바일 — Figma: Mobile-Search (336:2265) / Mobile-SearchError (336:4198)
 *     미술관 칸(분관 목록) + 날짜 칸(달력 판) + 조회하기·초기화 버튼, 오류는 아래에 안내
 *   데스크탑 — Figma: Desktop-Seach (468:8060) / ErrorPopup (491:14406)
 *     분관 알약 버튼(Museum-BTN) + 화면에 펼친 달력, 달력의 '조회하기'로 검색, 오류는 가운데 팝업
 * 조회 결과
 *   - 운영일이면 → 검색결과 화면으로 이동 (조건을 주소에 담음: /result?branch=…&date=…)
 *   - 휴관·선택불가일이면 → 안내(ErrorInfo)
 * 'Userflow'·'Search-Form'·'Museum-Select'·'Date-Selecet' 묶음은 Figma에서 컴포넌트가 아니라 보이는 그대로 작성했다.
 */
const branches = ['서소문 본관', '북서울미술관', '서서울미술관', '미술아카이브', '사진미술관', '남서울미술관', '난지미술창작스튜디오', '백남준을 기억하는 집']
// 데스크탑 시안의 Museum-BTN 글자 (첫 분관만 띄어쓰기가 다름)
const desktopBranchLabel = { '서소문 본관': '서소문본관' }

// 시안의 2026년 10월 달력과 같은 운영 정보 (Calendar 기본 데이터와 동일)
const closeDays = [12, 19, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
function getStatus(dateText) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateText)
  if (!m || m[1] !== '2026' || m[2] !== '10') return 'unknown'
  const d = Number(m[3])
  if (d < 1 || d > 31) return 'unknown'
  if (d <= 11) return 'not'
  return closeDays.includes(d) ? 'close' : 'open'
}

const weekdayNames = ['일', '월', '화', '수', '목', '금', '토']
function toKoreanDate(dateText) {
  const [y, mo, d] = dateText.split('-').map(Number)
  const day = new Date(y, mo - 1, d).getDay()
  return `${mo}월 ${d}일 (${weekdayNames[day]})`
}

// 고른 날짜 다음의 가장 가까운 운영일 (시안 10월 기준)
function nearestOpenDate(dateText) {
  const start = Number(dateText.slice(-2)) || 0
  for (let d = Math.max(start + 1, 1); d <= 31; d += 1) {
    const text = `2026-10-${String(d).padStart(2, '0')}`
    if (getStatus(text) === 'open') return text
  }
  return null
}

function SearchPage() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuBtnRef = useRef(null)

  const [branch, setBranch] = useState('')
  const [museumOpen, setMuseumOpen] = useState(false)
  const [date, setDate] = useState('')
  const [calendarOpen, setCalendarOpen] = useState(false)
  const [error, setError] = useState(null) // { date, place, error }

  const closeMenu = () => {
    setMenuOpen(false)
    menuBtnRef.current?.focus()
  }

  // 달력 판이 열리면 판으로 포커스, ESC로 닫기 → 닫히면 달력 버튼으로 포커스 복귀
  const sheetRef = useRef(null)
  useEffect(() => {
    if (!calendarOpen) return undefined
    sheetRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && setCalendarOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.querySelector('.search-page .form__calendar')?.focus()
    }
  }, [calendarOpen])

  const goResult = (dateText) => {
    const query = new URLSearchParams({ branch, date: dateText })
    navigate(`/result?${query.toString()}`)
  }

  // ESC로 오류 안내(데스크탑 팝업) 닫기
  useEffect(() => {
    if (!error) return undefined
    const onKey = (e) => e.key === 'Escape' && setError(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [error])

  const handleSubmit = (event) => {
    event?.preventDefault()
    if (!branch) {
      setMuseumOpen(true)
      document.querySelector('.search-page__museum-btns button')?.focus() // 데스크탑: 첫 분관 버튼으로
      return
    }
    const status = getStatus(date)
    if (status === 'open') {
      goResult(date)
      return
    }
    if (status === 'unknown') {
      setError({ date: date || '날짜', place: branch, error: '전시해설 일정이 없는 날', dateText: date })
      return
    }
    setError({ date: toKoreanDate(date), place: branch, error: status === 'close' ? '휴관일' : '선택할 수 없는 날', dateText: date })
  }

  const handleReset = () => {
    setBranch('')
    setDate('')
    setError(null)
    setMuseumOpen(false)
    setCalendarOpen(false)
  }

  const handleNearest = () => {
    const next = nearestOpenDate(error?.dateText ?? '')
    if (next) goResult(next)
  }

  return (
    <div className="search-page">
      <TopNav menus={desktopMenus} menuOpen={menuOpen} buttonRef={menuBtnRef} onMenuClick={() => setMenuOpen(!menuOpen)} />

      {/* Userflow — 현재 위치 */}
      <nav className="search-page__flow" aria-label="현재 위치">
        <ol role="list">
          <li className="search-page__flow-parent">전시해설</li>
          <li aria-hidden="true">&gt;</li>
          <li className="search-page__flow-current" aria-current="page">
            일정찾기
          </li>
        </ol>
      </nav>

      <main>
        <h1 className="search-page__hidden-title">전시해설 일정찾기</h1>

        {/* ---------- 데스크탑 (1024px 이상) — Museum-Select + Date-Selecet ---------- */}
        <div className="show-desktop">
          <section className="search-page__desk-section" aria-labelledby="desk-museum-title">
            <h2 className="search-page__desk-title" id="desk-museum-title">
              미술관
            </h2>
            <div className="search-page__museum-btns" role="group" aria-labelledby="desk-museum-title">
              {branches.map((name) => (
                <MuseumBtn
                  key={name}
                  text={desktopBranchLabel[name] ?? name}
                  selected={branch === name}
                  onClick={() => {
                    setBranch(name)
                    setError(null)
                  }}
                />
              ))}
            </div>
          </section>
          <section className="search-page__desk-section search-page__desk-section--date" aria-labelledby="desk-date-title">
            <h2 className="search-page__desk-title" id="desk-date-title">
              관람예정일(YYYY-MM-DD)
            </h2>
            <Calendar
              selected={date.startsWith('2026-10-') ? `10-${Number(date.slice(-2))}` : undefined}
              onSelect={(d) => {
                setDate(`2026-10-${d.day.padStart(2, '0')}`)
                setError(null)
              }}
              onSubmit={() => handleSubmit()}
            />
          </section>
        </div>

        {/* ---------- 모바일 — Search-Form ---------- */}
        <form className="search-page__form" onSubmit={handleSubmit}>
          <div className="search-page__field">
            <Form
              variant="museum"
              value={branch}
              expanded={museumOpen}
              onOpen={() => {
                setMuseumOpen(!museumOpen)
                setCalendarOpen(false)
              }}
            />
            {museumOpen && (
              <ul className="search-page__select" role="list" aria-label="미술관 목록">
                {branches.map((name) => (
                  <li key={name}>
                    <SelectList
                      text={name}
                      selected={branch === name}
                      onClick={() => {
                        setBranch(name)
                        setMuseumOpen(false)
                        setError(null)
                      }}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="search-page__field">
            <Form
              variant="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value)
                setError(null)
              }}
              calendarOpen={calendarOpen}
              onCalendarClick={() => {
                setCalendarOpen(!calendarOpen)
                setMuseumOpen(false)
              }}
            />
          </div>

          <div className="search-page__buttons">
            <SearchBtn className="search-page__search-btn" />
            <ResetBtn onClick={handleReset} />
          </div>
        </form>

        {/* 오류 안내 — 모바일: 아래에 (Research-info) / 데스크탑: 가운데 팝업 (ErrorPopup) */}
        {error && (
          <div className="search-page__error">
            <div className="search-page__error-box" role="dialog" aria-label="검색 안내">
              <ErrorInfo date={error.date} place={error.place} error={error.error} onLinkClick={handleNearest} onClose={() => setError(null)} />
            </div>
          </div>
        )}
      </main>

      {/* 달력 — 화면 아래에서 올라오는 판 (Figma Calendar: 위쪽 모서리만 둥근 360px 판) */}
      {calendarOpen && (
        <div className="search-page__sheet-backdrop" onClick={() => setCalendarOpen(false)}>
          <div
            ref={sheetRef}
            tabIndex={-1}
            className="search-page__sheet"
            role="dialog"
            aria-modal="true"
            aria-label="관람예정일 달력"
            onClick={(e) => e.stopPropagation()}
          >
            <Calendar
              selected={date.startsWith('2026-10-') ? `10-${Number(date.slice(-2))}` : undefined}
              onSelect={(d) => {
                setDate(`2026-10-${d.day.padStart(2, '0')}`)
                setError(null)
              }}
              onSubmit={() => setCalendarOpen(false)}
            />
          </div>
        </div>
      )}

      {menuOpen && (
        <div className="search-page__overlay">
          <Nav menus={navMenus} onClose={closeMenu} />
        </div>
      )}
    </div>
  )
}

export default SearchPage
