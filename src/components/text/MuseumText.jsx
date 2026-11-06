import './MuseumText.css'

/**
 * 분관 이름 + 주소 — Figma: Museum-Text (node 397:4297)
 * - address: 주소 (Figma 속성명 오타 adress → address)
 */
function MuseumText({ title = '서소문본관', address = '서울특별시 중구 덕수궁길 61', className = '' }) {
  return (
    <div className={`museum-text ${className}`.trim()}>
      <p className="museum-text__title">{title}</p>
      <p className="museum-text__address">{address}</p>
    </div>
  )
}

export default MuseumText
