import CalendarBtn from './CalendarBtn.jsx'
import './CalendarBtnDesktop.css'

/**
 * 달력 '조회하기' 버튼 (데스크탑) — Figma: Calender-BTN 데스크탑 (node 480:11443, Base / HOV)
 * 색·그림자·모양은 모바일 CalendarBtn과 같고, 글자가 '조회하기'에 조금 작다(14px).
 * 그래서 CalendarBtn을 그대로 쓰고 글자만 바꾼다.
 *
 * - text: 버튼 글자 (기본 '조회하기')
 * - onClick: 눌렀을 때 실행할 함수
 */
function CalendarBtnDesktop({ text = '조회하기', className = '', ...rest }) {
  return <CalendarBtn {...rest} text={text} className={`calendar-btn-desktop ${className}`.trim()} />
}

export default CalendarBtnDesktop
