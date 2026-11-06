import TopNavMobile from '../navigation/TopNavMobile.jsx'
import TopNavDesktop from '../navigation/TopNavDesktop.jsx'

/**
 * 상단 메뉴바 (반응형 세트) — Figma: TOP-NAV 세트 (node 404:6168, Mobile / Desktop)
 *
 * 화면 1024px 미만은 TopNavMobile(이름 + ☰ 버튼), 이상은 TopNavDesktop(로고 + 주 메뉴 + 로그인·검색·EN)을 보여준다.
 * 받은 값은 두 컴포넌트에 똑같이 전달된다.
 *   - 모바일용: onMenuClick, menuOpen, buttonRef
 *   - 데스크탑용: homeHref, menus, links
 */
function TopNav({ className = '', ...props }) {
  return (
    <div className={`top-nav ${className}`.trim()}>
      <div className="show-mobile">
        <TopNavMobile {...props} />
      </div>
      <div className="show-desktop">
        <TopNavDesktop {...props} />
      </div>
    </div>
  )
}

export default TopNav
