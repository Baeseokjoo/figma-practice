import './Section3Text.css'

/**
 * 섹션 소개 텍스트 — Figma: Section3-Text (node 227:2895)
 */
function Section3Text({ title = 'SeMA 소장품', sub = '서울시립미술관이 소장한 10,245점을 살펴보세요.', className = '' }) {
  return (
    <div className={`section3-text ${className}`.trim()}>
      <p className="section3-text__title">{title}</p>
      <p className="section3-text__sub">{sub}</p>
    </div>
  )
}

export default Section3Text
