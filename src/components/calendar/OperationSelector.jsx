import './OperationSelector.css'

/**
 * 달력 범례 한 칸 — Figma: Operation Selector (node 473:11146, Mobile)
 * 작은 네모(달력 날짜 칸 모양) + 설명 글자. 네모는 꾸밈이라 스크린리더가 읽지 않는다.
 * 역할: 달력 날짜 칸(CalendarSource)의 테두리 색이 무슨 뜻인지 글자로 알려주는 범례.
 *       달력 근처에 운영·휴관 범례를 함께 배치해서 상태를 구분한다.
 *
 * - type: 'open'(운영 — 파란 테두리) / 'close'(휴관 — 빨간 테두리) / 'not'(선택불가 — 회색 칸)
 * - text: 설명 글자 (기본값: 운영 / 휴관 / 선택불가)
 */
const defaultText = { open: '운영', close: '휴관', not: '선택불가' }

function OperationSelector({ type = 'open', text, className = '' }) {
  const label = text ?? defaultText[type]

  return (
    <span className={`operation-selector ${className}`.trim()}>
      <span className={`operation-selector__mark operation-selector__mark--${type}`} aria-hidden="true" />
      {label}
    </span>
  )
}

export default OperationSelector
