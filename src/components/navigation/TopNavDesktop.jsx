import { useState } from 'react'
import MainMenu from './MainMenu.jsx'
import SubMenuLink from './SubMenuLink.jsx'
import SubMenuDesktop from './SubMenuDesktop.jsx'
import logo from '../../assets/images/logo.png'
import iconSearch from '../../assets/icons/icon-search.png'
import iconLanguage from '../../assets/icons/icon-language.png'
import './TopNavDesktop.css'

/**
 * 상단 메뉴바 (데스크탑) — Figma: TOP-NAV/Desktop (node 404:5874)
 * MainMenu · SubMenuLink · SubMenuDesktop 컴포넌트를 안에서 사용한다.
 * 윗줄: 로그인 · 검색 · EN (오른쪽 정렬) / 아랫줄: 로고 + 주 메뉴 5개
 *
 * - homeHref: 로고를 눌렀을 때 이동할 주소 (기본 '/')
 * - menus: 주 메뉴 [{ text, href, active, items: [{ text, href }] }, ...]  (없으면 시안의 메뉴 5개)
 *     items가 있으면 마우스를 올리거나(키보드 포커스 포함) 누르면 아래에 검은 하위 메뉴 줄이 나온다
 *     (Figma: 3-4.완성본 › Desktop › NAV-Sub01 ~ 04)
 * - links: 윗줄 링크 [{ text, href, icon, lang }, ...]  (없으면 로그인 · 검색 · EN)
 *   href가 없으면 글자만 보여준다 (이동 주소가 아직 정해지지 않음).
 */
const defaultMenus = [
  { text: '소개' },
  { text: '전시·행사·문화' },
  { text: '전시해설' },
  { text: '소장품과 미술연구' },
  { text: '방문하기' },
]

const defaultLinks = [
  { text: '로그인' },
  { text: '검색', icon: iconSearch },
  { text: 'EN', icon: iconLanguage, lang: 'en' },
]

function TopNavDesktop({ homeHref = '/', menus = defaultMenus, links = defaultLinks, className = '' }) {
  const [openIndex, setOpenIndex] = useState(null) // 눌러서 연 하위 메뉴 번호

  return (
    <header className={`top-nav-desktop ${className}`.trim()} onKeyDown={(e) => e.key === 'Escape' && setOpenIndex(null)}>
      <ul className="top-nav-desktop__links" role="list">
        {links.map((link) => (
          <li key={link.text}>
            <SubMenuLink text={link.text} icon={link.icon} href={link.href} lang={link.lang} />
          </li>
        ))}
      </ul>

      <div className="top-nav-desktop__main">
        <a className="top-nav-desktop__logo" href={homeHref}>
          <img src={logo} alt="서울시립미술관 SEOUL MUSEUM OF ART 홈" width="196" height="62" />
        </a>
        <nav aria-label="주 메뉴">
          <ul className="top-nav-desktop__menu" role="list">
            {menus.map((menu, i) => {
              const hasItems = Array.isArray(menu.items) && menu.items.length > 0
              return (
                <li
                  key={menu.text}
                  className={`top-nav-desktop__item ${openIndex === i ? 'is-open' : ''}`.trim()}
                >
                  <MainMenu
                    text={menu.text}
                    href={menu.href}
                    active={menu.active}
                    onClick={hasItems ? () => setOpenIndex(openIndex === i ? null : i) : undefined}
                  />
                  {hasItems && (
                    <ul className="top-nav-desktop__sub" role="list" aria-label={`${menu.text} 하위 메뉴`}>
                      {menu.items.map((item) => (
                        <li key={item.text}>
                          <SubMenuDesktop text={item.text} href={item.href} />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default TopNavDesktop
