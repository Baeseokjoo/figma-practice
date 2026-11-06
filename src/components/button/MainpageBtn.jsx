import './MainpageBtn.css'

/**
 * 메인화면으로 가기 버튼 — Figma: Mainpage-BTN (node 284:4150, Base / HOV)
 * 다른 페이지로 이동하므로 링크(<a>)로 만든다.
 *
 * - href: 이동할 주소 (기본값 '/' — 메인화면)
 */
function MainpageBtn({ text = '메인화면', href = '/', className = '' }) {
  return (
    <a className={`mainpage-btn ${className}`.trim()} href={href}>
      {text}
    </a>
  )
}

export default MainpageBtn
