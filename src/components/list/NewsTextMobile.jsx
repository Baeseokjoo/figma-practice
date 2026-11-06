import NewsTitle from '../text/NewsTitle.jsx'
import './NewsTextMobile.css'

/**
 * 뉴스 목록 한 줄 (모바일) — Figma: News-Text/Mobile (node 227:2903)
 * NewsTitle 컴포넌트를 안에서 사용한다.
 *
 * - category: 분류 (Figma 속성명 오타 Categori → category)
 * - date: 날짜 (예: 2026.10.01)
 * - href: 제목을 눌렀을 때 이동할 주소
 */
function NewsTextMobile({ title, category = '보도자료', date = '2026.10.01', href, className = '' }) {
  return (
    <div className={`news-text-mobile ${className}`.trim()}>
      <NewsTitle title={title} href={href} />
      <p className="news-text-mobile__category">{category}</p>
      <p className="news-text-mobile__date">{date}</p>
    </div>
  )
}

export default NewsTextMobile
