import NewsTextMobile from '../list/NewsTextMobile.jsx'
import NewsTextDesktop from '../list/NewsTextDesktop.jsx'

/**
 * 뉴스 목록 한 줄 (반응형 세트) — Figma: News-Text 세트 (node 468:7891, Mobile / Desktop)
 *
 * 화면 1024px 미만은 NewsTextMobile(세로 3줄), 이상은 NewsTextDesktop(제목 | 분류 | 날짜 한 줄)을 보여준다.
 * 받은 값(title, category, date, href)은 두 컴포넌트에 똑같이 전달된다.
 */
function NewsText({ className = '', ...props }) {
  return (
    <div className={`news-text ${className}`.trim()}>
      <div className="show-mobile">
        <NewsTextMobile {...props} />
      </div>
      <div className="show-desktop">
        <NewsTextDesktop {...props} />
      </div>
    </div>
  )
}

export default NewsText
