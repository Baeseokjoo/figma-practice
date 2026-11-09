import { useEffect, useLayoutEffect, useRef, useState } from 'react'
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
 *     items가 있으면 메뉴를 눌렀을 때(키보드는 Enter) 바로 아래에 검은 하위 메뉴 줄이 나온다
 *     (Figma: 3-4.완성본 › Desktop › NAV-Sub01 ~ 04 / 프로토타입: 누르면 열림, 마우스 올림은 밑줄만)
 *     - 위치: 누른 메뉴 바로 아래 가운데. 오른쪽 끝을 넘으면 메뉴바 오른쪽 끝에 맞춤 (시안의 Sub03·04)
 *     - 닫기: 같은 메뉴 다시 누르기 / 바깥 누르기 / ESC (ESC는 그 메뉴 버튼으로 포커스 복귀)
 * - links: 윗줄 링크 [{ text, href, icon, lang }, ...]  (없으면 로그인 · 검색 · EN)
 *   href가 없으면 글자만 보여준다 (이동 주소가 아직 정해지지 않음).
 */
const defaultMenus = [
  { text: '소개' },
  { text: '전시·행사·교육' },
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
  const [subLeft, setSubLeft] = useState(0) // 하위 메뉴 줄의 왼쪽 위치 (메뉴바 기준)
  const headerRef = useRef(null)
  const mainRef = useRef(null)

  // 하위 메뉴 위치 계산 — 누른 메뉴의 가운데에 맞추되, 메뉴바 양 끝을 넘지 않게
  useLayoutEffect(() => {
    if (openIndex === null) return undefined
    const place = () => {
      const main = mainRef.current
      const item = main?.querySelector('.top-nav-desktop__item.is-open')
      const sub = item?.querySelector('.top-nav-desktop__sub')
      if (!sub) return
      const mainBox = main.getBoundingClientRect()
      const itemBox = item.getBoundingClientRect()
      const center = itemBox.left + itemBox.width / 2 - mainBox.left
      const left = Math.min(center - sub.offsetWidth / 2, mainBox.width - sub.offsetWidth)
      setSubLeft(Math.max(left, 0))
    }
    place()
    window.addEventListener('resize', place)
    return () => window.removeEventListener('resize', place)
  }, [openIndex])

  // 바깥을 누르면 닫기 (Figma: Close when clicking outside)
  useEffect(() => {
    if (openIndex === null) return undefined
    const onPointerDown = (e) => {
      if (!headerRef.current?.contains(e.target)) setOpenIndex(null)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [openIndex])

  const handleKeyDown = (event) => {
    if (event.key !== 'Escape' || openIndex === null) return
    mainRef.current?.querySelector('.top-nav-desktop__item.is-open .main-menu')?.focus()
    setOpenIndex(null)
  }

  return (
    <header ref={headerRef} className={`top-nav-desktop ${className}`.trim()} onKeyDown={handleKeyDown}>
      <ul className="top-nav-desktop__links" role="list">
        {links.map((link) => (
          <li key={link.text}>
            <SubMenuLink text={link.text} icon={link.icon} href={link.href} lang={link.lang} />
          </li>
        ))}
      </ul>

      <div className="top-nav-desktop__main" ref={mainRef}>
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
                    active={menu.active || openIndex === i}
                    expanded={hasItems ? openIndex === i : undefined}
                    onClick={hasItems ? () => setOpenIndex(openIndex === i ? null : i) : undefined}
                  />
                  {hasItems && openIndex === i && (
                    <ul
                      className="top-nav-desktop__sub"
                      role="list"
                      aria-label={`${menu.text} 하위 메뉴`}
                      style={{ left: subLeft }}
                    >
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
