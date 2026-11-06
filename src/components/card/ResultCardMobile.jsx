import ResultCardInfo from './ResultCardInfo.jsx'
import iconArrowRight from '../../assets/icons/icon-arrow-right.png'
import './ResultCardMobile.css'

/**
 * 검색 결과 카드 (모바일) — Figma: ResaltCard/Mobile (node 284:4261)
 * Figma 레이어명 오타(Resalt)는 코드에서 Result로 정정
 * ResultCardInfo 컴포넌트(시간·장소 배지)를 안에서 사용한다.
 *
 * - title: 전시명 / time: 해설 시간 / place: 장소 / sub: 안내 문구
 * - href가 있으면 카드 전체가 링크가 된다 (상세 페이지로 이동).
 * - 오른쪽 화살표는 장식이라 스크린리더가 읽지 않도록 alt="" 처리.
 */
function ResultCardMobile({
  title = '2026 한국 근대 거장전 《유영국: 산은 내 안에 있다》',
  time = '오전 11:00',
  place = '1층 전시실',
  sub = '*현장접수 (오전 10시부터 선착순 20명)',
  href,
  className = '',
}) {
  const classes = `result-card-mobile ${className}`.trim()
  const content = (
    <>
      <p className="result-card-mobile__title">{title}</p>
      <div className="result-card-mobile__info">
        <ResultCardInfo type="time" text={time} />
        <ResultCardInfo type="place" text={place} />
      </div>
      <div className="result-card-mobile__bottom">
        <p className="result-card-mobile__sub">{sub}</p>
        <img className="result-card-mobile__icon" src={iconArrowRight} alt="" width="24" height="24" />
      </div>
    </>
  )

  if (href) {
    return (
      <a className={classes} href={href}>
        {content}
      </a>
    )
  }

  return <div className={classes}>{content}</div>
}

export default ResultCardMobile
