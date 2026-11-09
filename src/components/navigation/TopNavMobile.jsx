import { Link } from 'react-router-dom'
import iconMenu from '../../assets/icons/icon-menu.png'
import iconClose from '../../assets/icons/icon-close.png'
import './TopNavMobile.css'

/**
 * 상단 메뉴바 (모바일) — Figma: TOP-NAV/Mobile (node 227:2101)
 *
 * - onMenuClick: 메뉴 버튼을 눌렀을 때 실행할 함수
 * - menuOpen: 전체 메뉴가 열려 있는지
 *     false → ☰ 아이콘 / true → X(닫기) 아이콘 (Figma NAV 안에서는 닫기Icon으로 바뀜)
 *     스크린리더에는 '전체 메뉴 열기' / '전체 메뉴 닫기'로 알려줌
 * - buttonRef: 메뉴 버튼에 포커스를 옮길 때 사용 (예: 전체 메뉴가 열리면 X 버튼에 포커스)
 * - homeHref: 왼쪽 미술관 이름을 눌렀을 때 갈 주소 (기본 '/' 메인 — Figma 프로토타입: MainTitle → Mobile-Main)
 */
function TopNavMobile({ onMenuClick, menuOpen = false, buttonRef, homeHref = '/', className = '' }) {
  return (
    <header className={`top-nav-mobile ${className}`.trim()}>
      <Link className="top-nav-mobile__title" to={homeHref} aria-label="서울시립미술관 메인으로">
        <span className="top-nav-mobile__title-ko">서울시립미술관</span>
        <span className="top-nav-mobile__title-en" lang="en">SEOUL MUSEUM OF ART</span>
      </Link>
      <button
        ref={buttonRef}
        className="top-nav-mobile__menu"
        type="button"
        aria-label={menuOpen ? '전체 메뉴 닫기' : '전체 메뉴 열기'}
        aria-expanded={menuOpen}
        onClick={onMenuClick}
      >
        <img src={menuOpen ? iconClose : iconMenu} alt="" width="44" height="44" />
      </button>
    </header>
  )
}

export default TopNavMobile
