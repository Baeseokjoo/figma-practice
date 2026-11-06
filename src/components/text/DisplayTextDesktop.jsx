import './DisplayTextDesktop.css'

/**
 * 전시 정보 텍스트 묶음 (데스크탑) — Figma: Dispaly-text 데스크탑 (node 404:6920)
 * Figma 레이어명 오타(Dispaly)는 코드에서 Display로 정정
 * 모바일(DisplayText)과 달리 장소·기간이 한 줄에 나란히 있고, 제목은 줄바꿈된다.
 *
 * - title: 제목 / place: 장소 / date: 기간
 */
function DisplayTextDesktop({ title = '《오윤》', place = '미술아카이브', date = '2026/08/20~2027/02/14', className = '' }) {
  return (
    <div className={`display-text-desktop ${className}`.trim()}>
      <p className="display-text-desktop__title">{title}</p>
      <div className="display-text-desktop__sub">
        <p>{place}</p>
        <p>{date}</p>
      </div>
    </div>
  )
}

export default DisplayTextDesktop
