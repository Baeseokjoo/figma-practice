import DetailCardMobile from '../card/DetailCardMobile.jsx'
import DetailCardDesktop from '../card/DetailCardDesktop.jsx'

/**
 * 상세 페이지 상단 카드 (반응형 세트) — Figma: 상세페이지Card 세트 (node 491:12807, Mobile / Desktop)
 *
 * 화면 1024px 미만은 DetailCardMobile('공유하기' 버튼을 눌러 공유 목록 열기),
 * 이상은 DetailCardDesktop(포스터 옆에 공유 목록이 항상 보임)을 보여준다.
 * 받은 값(title, image, imageAlt, onNaver, onKakao, onCopyLink)은 두 컴포넌트에 똑같이 전달된다.
 */
function DetailCard({ className = '', ...props }) {
  return (
    <div className={`detail-card ${className}`.trim()}>
      <div className="show-mobile">
        <DetailCardMobile {...props} />
      </div>
      <div className="show-desktop">
        <DetailCardDesktop {...props} />
      </div>
    </div>
  )
}

export default DetailCard
