import './CalendarSource.css'

/**
 * 달력의 날짜 한 칸 — Figma: Calender-Source (node 284:3918)
 * Figma 레이어명 오타(Calender)는 코드에서 Calendar로 정정
 *
 * status (Figma 변형 → 코드 값)
 *   - 'date'  (Date)  : 일반 날짜 — 누를 수 없음
 *   - 'not'   (Not)   : 고를 수 없는 날 (회색) — 누를 수 없음
 *   - 'open'  (Open)  : 운영일 (파란 테두리) — 누를 수 있음
 *   - 'close' (Close) : 휴관일 (빨간 테두리) — 누를 수 있음
 * selected=true : 선택됨 (Click / CloseClick — 하늘색 배경)
 *
 * 색만으로 상태를 구분하지 않도록, 스크린리더에는 '운영', '휴관', '선택됨'을 함께 읽어준다.
 */
const statusText = {
  open: '운영',
  close: '휴관',
  not: '선택 불가',
}

function CalendarSource({ day = '1', status = 'date', selected = false, onClick, className = '' }) {
  const classes = `calendar-source calendar-source--${status} ${selected ? 'is-selected' : ''} ${className}`
    .replace(/\s+/g, ' ')
    .trim()
  const hidden = [statusText[status], selected && '선택됨'].filter(Boolean).join(', ')
  const content = (
    <>
      {day}
      {hidden && <span className="calendar-source__status">, {hidden}</span>}
    </>
  )

  if (status === 'open' || status === 'close') {
    return (
      <button className={classes} type="button" aria-pressed={selected} onClick={onClick}>
        {content}
      </button>
    )
  }

  return <span className={classes}>{content}</span>
}

export default CalendarSource
