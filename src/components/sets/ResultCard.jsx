import ResultCardMobile from '../card/ResultCardMobile.jsx'
import ResultCardDesktop from '../card/ResultCardDesktop.jsx'

/**
 * 검색 결과 카드 (반응형 세트) — Figma: ResaltCard 세트 (node 491:12504, Mobile / Desktop)
 * Figma 레이어명 오타(Resalt)는 코드에서 Result로 정정
 *
 * 화면 1024px 미만은 ResultCardMobile(카드 모양), 이상은 ResultCardDesktop(표 한 줄 모양)을 보여준다.
 * 받은 값(title, time, place, sub, number, href)은 두 컴포넌트에 똑같이 전달된다.
 *   - number(회차)는 데스크탑에서만 보인다.
 *   - time·place에 줄바꿈(\n)을 넣으면 데스크탑에서는 두 줄, 모바일 배지에서는 한 줄로 보인다.
 * - desktop: 데스크탑에서만 다르게 보여줄 값 (예: { sub: '- 현장접수…\n- 선착순 20명' })
 *     Figma 시안에서 모바일·데스크탑 문구가 다를 때 사용
 */
function ResultCard({ className = '', desktop, ...props }) {
  return (
    <div className={`result-card ${className}`.trim()}>
      <div className="show-mobile">
        <ResultCardMobile {...props} />
      </div>
      <div className="show-desktop">
        <ResultCardDesktop {...props} {...desktop} />
      </div>
    </div>
  )
}

export default ResultCard
