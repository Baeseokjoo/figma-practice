import './ResultCardDesktop.css'

/**
 * 검색 결과 한 줄 (데스크탑) — Figma: ResaltCard/Desktop (node 491:12464)
 * Figma 레이어명 오타(Resalt)는 코드에서 Result로 정정
 * 배치: 회차 | 전시명 | 시간 | 장소 | 비고 (가로 한 줄, 표의 한 행처럼)
 *
 * - number: 회차 (예: '1회차') / title: 전시명
 * - time / place / sub: 시간 · 장소 · 비고 — 줄바꿈(\n)을 넣으면 화면에서도 줄이 바뀐다.
 * - href: 전시명을 눌렀을 때 이동할 주소 (상세 페이지)
 */
function ResultCardDesktop({
  number = '1회차',
  title = '2026 한국 근대 거장전 《유영국: 산은 내 안에 있다》',
  time = '오전\n11:00',
  place = '1층\n전시실',
  sub = '- 현장접수 (오전 10시부터)\n- 선착순 20명',
  href,
  className = '',
}) {
  return (
    <div className={`result-card-desktop ${className}`.trim()}>
      <p className="result-card-desktop__cell result-card-desktop__number">{number}</p>
      <p className="result-card-desktop__cell result-card-desktop__title">
        {href ? <a href={href}>{title}</a> : title}
      </p>
      <p className="result-card-desktop__cell result-card-desktop__center">{time}</p>
      <p className="result-card-desktop__cell result-card-desktop__center">{place}</p>
      <p className="result-card-desktop__cell result-card-desktop__sub">{sub}</p>
    </div>
  )
}

export default ResultCardDesktop
