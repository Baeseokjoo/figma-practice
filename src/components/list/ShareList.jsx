import iconNaver from '../../assets/icons/icon-naver.png'
import iconKakao from '../../assets/icons/icon-kakao.png'
import iconLink from '../../assets/icons/icon-link.png'
import iconNaverLg from '../../assets/icons/icon-naver-lg.png'
import iconKakaoLg from '../../assets/icons/icon-kakao-lg.png'
import iconLinkLg from '../../assets/icons/icon-link-lg.png'
import './ShareList.css'

/**
 * 공유 방법 목록 — Figma: ShareList (node 369:3277)
 *
 * - onNaver / onKakao / onCopyLink: 각 버튼을 눌렀을 때 실행할 함수
 *   (실제 네이버·카카오 공유 연결은 아직 정해지지 않아 함수만 받는다)
 * - size: 'sm'(기본, 아이콘 30px — 모바일) / 'lg'(아이콘 60px — 데스크탑 상세페이지Card 안의 ShareList)
 * - 아이콘은 글자(네이버·카카오톡·링크복사)와 같은 내용이라 alt="" 처리.
 */
function ShareList({ id, size = 'sm', onNaver, onKakao, onCopyLink, className = '' }) {
  const large = size === 'lg'
  const iconSize = large ? 60 : 30
  const items = [
    { key: 'naver', label: '네이버', icon: large ? iconNaverLg : iconNaver, onClick: onNaver },
    { key: 'kakao', label: '카카오톡', icon: large ? iconKakaoLg : iconKakao, onClick: onKakao },
    { key: 'link', label: '링크복사', icon: large ? iconLinkLg : iconLink, onClick: onCopyLink },
  ]

  return (
    <ul className={`share-list ${large ? 'share-list--lg' : ''} ${className}`.replace(/\s+/g, ' ').trim()} id={id} role="list">
      {items.map((item) => (
        <li key={item.key}>
          <button className="share-list__item" type="button" onClick={item.onClick}>
            <img src={item.icon} alt="" width={iconSize} height={iconSize} />
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ShareList
