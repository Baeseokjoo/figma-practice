import { useEffect, useId, useRef, useState } from 'react'
import CardImage from './CardImage.jsx'
import DetailTitle from '../text/DetailTitle.jsx'
import ShareBtn from '../button/ShareBtn.jsx'
import ShareList from '../list/ShareList.jsx'
import sampleImage from '../../assets/images/detail-sample.jpg'
import './DetailCardMobile.css'

/**
 * 상세 페이지 상단 카드 (모바일) — Figma: 상세페이지Card (node 284:4332)
 * CardImage · DetailTitle · ShareBtn · ShareList 컴포넌트를 안에서 사용한다.
 *
 * - 오른쪽 위 '공유하기'를 누르면 공유 목록(ShareList)이 버튼 자리에 겹쳐 열린다 (Figma 프로토타입).
 *   목록이 버튼을 덮으므로 열리면 첫 항목으로 포커스가 가고,
 *   ESC를 누르면 닫히며 포커스가 '공유하기' 버튼으로 돌아간다. 목록 바깥을 눌러도 닫힌다.
 * - image / imageAlt: 포스터 이미지 주소와 설명 (없으면 시안의 예시 이미지)
 * - onNaver / onKakao / onCopyLink: 공유 목록 버튼 동작 (ShareList로 그대로 전달)
 */
function DetailCardMobile({
  title = '2026년 한국 근대 거장전 《유영국: 산은 내 안에 있다》',
  image = sampleImage,
  imageAlt = '',
  onNaver,
  onKakao,
  onCopyLink,
  className = '',
}) {
  const [shareOpen, setShareOpen] = useState(false)
  const shareListId = useId()
  const shareBtnRef = useRef(null)
  const shareRef = useRef(null)

  // 열리면 첫 항목에 포커스 + 바깥을 누르면 닫기 (Figma: Close when clicking outside)
  useEffect(() => {
    if (!shareOpen) return undefined
    shareRef.current?.querySelector('.share-list button')?.focus()
    const onPointerDown = (e) => {
      if (!shareRef.current?.contains(e.target)) setShareOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [shareOpen])

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && shareOpen) {
      setShareOpen(false)
      shareBtnRef.current?.focus()
    }
  }

  return (
    <div className={`detail-card-mobile ${className}`.trim()} onKeyDown={handleKeyDown}>
      <CardImage className="detail-card-mobile__image" src={image} alt={imageAlt} zoom={false} />
      <DetailTitle title={title} />
      <div className="detail-card-mobile__share" ref={shareRef}>
        <ShareBtn
          ref={shareBtnRef}
          expanded={shareOpen}
          controls={shareListId}
          onClick={() => setShareOpen(!shareOpen)}
        />
        {shareOpen && (
          <ShareList
            id={shareListId}
            className="detail-card-mobile__share-list"
            onNaver={onNaver}
            onKakao={onKakao}
            onCopyLink={onCopyLink}
          />
        )}
      </div>
    </div>
  )
}

export default DetailCardMobile
