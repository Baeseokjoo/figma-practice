import ResultMobile from '../text/ResultMobile.jsx'
import ResultDesktop from '../text/ResultDesktop.jsx'

/**
 * 검색 결과 요약 (반응형 세트) — Figma: Resalt 세트 (node 491:12716, Mobile / Desktop)
 * Figma 레이어명 오타(Resalt)는 코드에서 Result로 정정
 *
 * 화면 1024px 미만은 ResultMobile(세 줄), 이상은 ResultDesktop('분관 / 날짜 총 N건' 한 줄)을 보여준다.
 * 받은 값(place, date, number)은 두 컴포넌트에 똑같이 전달된다.
 */
function Result({ className = '', ...props }) {
  return (
    <div className={`result ${className}`.trim()}>
      <div className="show-mobile">
        <ResultMobile {...props} />
      </div>
      <div className="show-desktop">
        <ResultDesktop {...props} />
      </div>
    </div>
  )
}

export default Result
