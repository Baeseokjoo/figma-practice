import './CalendarBtn.css'

/**
 * 달력 '선택' 버튼 — Figma: Calender-BTN (node 284:3921, Base / HovClick)
 * Figma 레이어명 오타(Calender)는 코드에서 Calendar로 정정
 *
 * - onClick: 눌렀을 때 실행할 함수 (보통 고른 날짜 확정)
 */
function CalendarBtn({ text = '선택', className = '', ...rest }) {
  return (
    <button className={`calendar-btn ${className}`.trim()} type="button" {...rest}>
      {text}
    </button>
  )
}

export default CalendarBtn
