import CardImage from './CardImage.jsx'
import iconEducation from '../../assets/icons/icon-education.png'
import './Card.css'

/**
 * 프로그램 카드 — Figma: Card (node 227:2860)
 * CardImage 컴포넌트를 안에서 사용한다.
 *
 * - href가 있으면 카드 전체가 링크가 된다 (마우스를 올리면 이미지가 커짐).
 * - category: 분류 (Figma 속성명 오타 Categori → category)
 * - close: 모집 마감 안내
 * - image / imageAlt: 카드 이미지 주소와 설명 (없으면 시안의 예시 이미지)
 * - icon: 분류 옆 아이콘 그림 (기본 교육 아이콘. 예: 문화행사 카드는 icon-culture.png)
 */
function Card({
  title = '[Seo SeMA 뉴미디어 패밀리랩] 어린이 가족 프로그램 〈빛으로 그리는 우리의 시간',
  category = '교육프로그램',
  place = '서울시립 서서울미술관',
  date = '2026/11/14~2026/11/28',
  close = '2026/11/26 까지 모집',
  image,
  imageAlt = '',
  icon = iconEducation,
  href,
  className = '',
}) {
  const classes = `card ${className}`.trim()
  const content = (
    <>
      <CardImage src={image} alt={imageAlt} />
      <div className="card__text">
        <p className="card__title">{title}</p>
        <p className="card__category">
          {category}
          <img className="card__category-icon" src={icon} alt="" width="16" height="16" />
        </p>
        <p className="card__sub">{place}</p>
        <p className="card__sub">{date}</p>
        <p className="card__close">{close}</p>
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

export default Card
