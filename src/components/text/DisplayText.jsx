import './DisplayText.css'

/**
 * 전시 정보 텍스트 묶음 — Figma: Dispaly-text (node 203:9033)
 * Figma 레이어명 오타(Dispaly)는 코드에서 Display로 정정
 *
 * - title: 제목 (한 줄, 넘치면 … 처리)
 * - sub: 부제
 * - schedule: 일정 (showSchedule=false면 숨김 — Figma 불리언 속성)
 */
function DisplayText({ title = '타이틀', sub = '서브', schedule = '일정', showSchedule = true, className = '' }) {
  return (
    <div className={`display-text ${className}`.trim()}>
      <p className="display-text__title">{title}</p>
      <div className="display-text__sub">
        <p>{sub}</p>
        {showSchedule && <p>{schedule}</p>}
      </div>
    </div>
  )
}

export default DisplayText
