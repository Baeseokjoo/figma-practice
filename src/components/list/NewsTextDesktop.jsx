import NewsTitle from '../text/NewsTitle.jsx'
import './NewsTextDesktop.css'

/**
 * 뉴스 목록 한 줄 (데스크탑) — Figma: News-Text/Desktop (node 468:7881)
 * NewsTitle 컴포넌트를 안에서 사용한다.
 * 배치: 제목 | 분류 | 날짜 (가로 한 줄)
 *
 * - category: 분류 / date: 날짜 (예: 2026.10.01)
 * - href: 제목을 눌렀을 때 이동할 주소
 */
function NewsTextDesktop({ title, category = '보도자료', date = '2026.10.01', href, className = '' }) {
  return (
    <div className={`news-text-desktop ${className}`.trim()}>
      <NewsTitle className="news-text-desktop__title" title={title} href={href} />
      <p className="news-text-desktop__category">{category}</p>
      <p className="news-text-desktop__date">{date}</p>
    </div>
  )
}

export default NewsTextDesktop
