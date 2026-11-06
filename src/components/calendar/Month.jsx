import './Month.css'

/**
 * 달력의 연·월 표시 — Figma: Month (node 284:4142)
 * - text: 예) '2026년 10월'
 */
function Month({ text = '2026년 10월', className = '' }) {
  return <p className={`month ${className}`.trim()}>{text}</p>
}

export default Month
