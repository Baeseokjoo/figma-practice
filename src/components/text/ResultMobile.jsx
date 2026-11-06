import './ResultMobile.css'

/**
 * 검색 결과 요약 (모바일) — Figma: Resalt/Mobile (node 284:4235)
 * Figma 레이어명 오타(Resalt)는 코드에서 Result로 정정
 *
 * - date / place: 검색한 날짜와 분관
 * - number: 결과 개수 (예: '3건')
 * 검색 조건이 바뀌어 내용이 달라지면 스크린리더가 새 결과를 읽어준다 (role="status").
 */
function ResultMobile({ date = '2026년 10월 06일', place = '서소문 본관', number = '3건', className = '' }) {
  return (
    <div className={`result-mobile ${className}`.trim()} role="status">
      <div className="result-mobile__condition">
        <p>{date}</p>
        <p>{place}</p>
      </div>
      <p className="result-mobile__count">
        총 <span className="result-mobile__number">{number}</span>
      </p>
    </div>
  )
}

export default ResultMobile
