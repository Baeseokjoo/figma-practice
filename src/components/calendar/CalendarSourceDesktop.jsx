import CalendarSource from './CalendarSource.jsx'
import './CalendarSourceDesktop.css'

/**
 * 달력의 날짜 한 칸 (데스크탑) — Figma: Calender-Source 데스크탑 (node 473:8975)
 * 상태(Date / Not / Open / Click / Close / CloseClick)와 동작은 모바일 CalendarSource와 같고
 * 칸 크기만 크다 (Figma 188×88). 그래서 CalendarSource를 그대로 쓰고 크기만 바꾼다.
 *
 * 사용법은 CalendarSource와 같다: day, status, selected, onClick
 */
function CalendarSourceDesktop({ className = '', ...props }) {
  return <CalendarSource {...props} className={`calendar-source-desktop ${className}`.trim()} />
}

export default CalendarSourceDesktop
