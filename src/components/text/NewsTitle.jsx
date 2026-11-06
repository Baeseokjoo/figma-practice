import './NewsTitle.css'

/**
 * 뉴스 제목 — Figma: News-Title (node 227:3004, Base / Hover)
 *
 * - href가 있으면 링크(<a>)로 그리고, 마우스를 올리면 Hover 모양(아래 테두리)이 된다.
 * - href가 없으면 글자만 보여준다.
 */
function NewsTitle({ title = '서울시립 북서울미술관, 영유아 동반 가족 프로그램 〈댄싱 패밀리〉 개최', href, className = '' }) {
  const classes = `news-title ${className}`.trim()

  if (href) {
    return (
      <a className={classes} href={href}>
        {title}
      </a>
    )
  }

  return <p className={classes}>{title}</p>
}

export default NewsTitle
