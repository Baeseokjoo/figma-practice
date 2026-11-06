import './ResultCardInfo.css'

/**
 * 결과 카드의 정보 배지 — Figma: ResaltCard-Info (node 284:4248, Time / Place)
 * Figma 레이어명 오타(Resalt)는 코드에서 Result로 정정
 *
 * - type: 'time'(해설 시간, 파란 배경) / 'place'(장소, 분홍 배경)
 * - text: 배지 글자
 */
function ResultCardInfo({ type = 'time', text, className = '' }) {
  const label = text ?? (type === 'place' ? 'Place' : 'Time')

  return <span className={`result-card-info result-card-info--${type} ${className}`.trim()}>{label}</span>
}

export default ResultCardInfo
