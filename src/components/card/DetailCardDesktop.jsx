import CardImage from './CardImage.jsx'
import DetailTitle from '../text/DetailTitle.jsx'
import ShareList from '../list/ShareList.jsx'
import sampleImage from '../../assets/images/detail-sample.jpg'
import './DetailCardDesktop.css'

/**
 * 상세 페이지 상단 카드 (데스크탑) — Figma: 상세페이지Card (node 491:12792)
 * CardImage · ShareList(큰 아이콘) · DetailTitle 컴포넌트를 안에서 사용한다.
 *
 * 모바일(DetailCard)은 '공유하기' 버튼을 눌러야 공유 목록이 열리지만,
 * 데스크탑은 포스터 오른쪽에 '※ 공유하기'와 공유 목록이 항상 보인다.
 *
 * - image / imageAlt: 포스터 이미지 주소와 설명 (없으면 시안의 예시 이미지)
 * - onNaver / onKakao / onCopyLink: 공유 목록 버튼 동작
 */
function DetailCardDesktop({
  title = '2026년 한국 근대 거장전 《유영국: 산은 내 안에 있다》',
  image = sampleImage,
  imageAlt = '',
  onNaver,
  onKakao,
  onCopyLink,
  className = '',
}) {
  return (
    <div className={`detail-card-desktop ${className}`.trim()}>
      <div className="detail-card-desktop__top">
        <CardImage className="detail-card-desktop__image" src={image} alt={imageAlt} zoom={false} />
        <div className="detail-card-desktop__share">
          <p className="detail-card-desktop__share-title">※ 공유하기</p>
          <ShareList
            size="lg"
            className="detail-card-desktop__share-list"
            onNaver={onNaver}
            onKakao={onKakao}
            onCopyLink={onCopyLink}
          />
        </div>
      </div>
      <DetailTitle title={title} />
    </div>
  )
}

export default DetailCardDesktop
