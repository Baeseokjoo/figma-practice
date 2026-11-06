import './ResultDesktop.css'

/**
 * 검색 결과 요약 (데스크탑) — Figma: Resalt/Desktop (node 491:12697)
 * Figma 레이어명 오타(Resalt)는 코드에서 Result로 정정
 * 예) '서소문 본관 / 2026년 10월 13일 총 2건' (한 줄)
 *
 * - place / date: 검색한 분관과 날짜
 * - number: 결과 개수 (예: '2건')
 * 검색 조건이 바뀌어 내용이 달라지면 스크린리더가 새 결과를 읽어준다 (role="status").
 */
function ResultDesktop({ place = '서소문 본관', date = '2026년 10월 13일', number = '2건', className = '' }) {
  return (
    <div className={`result-desktop ${className}`.trim()} role="status">
      <p className="result-desktop__condition">
        {place} / {date}
      </p>
      <p className="result-desktop__count">
        총 <span className="result-desktop__number">{number}</span>
      </p>
    </div>
  )
}

export default ResultDesktop
