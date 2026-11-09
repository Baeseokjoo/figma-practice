import { useEffect, useRef, useState } from 'react'
import TopNavMobile from './TopNavMobile.jsx'
import Menu from './Menu.jsx'
import './Nav.css'

/**
 * 전체 메뉴 화면 (모바일) — Figma: NAV (node 227:3602, 01 ~ 05)
 * TopNavMobile · Menu(→ SubMenu) 컴포넌트를 안에서 사용한다.
 *
 * Figma의 변형 01~05는 '어느 메뉴가 펼쳐졌는지'라서, 코드에서는 하나의 컴포넌트로
 * 메뉴 제목을 누르면 그 메뉴만 펼쳐지고 나머지는 접힌다 (한 번에 하나만).
 *
 * - onClose: X 버튼을 누르거나 ESC를 눌렀을 때, 오른쪽으로 미끄러져 나가는 움직임(0.5초)이 끝난 뒤 실행 (보통 전체 메뉴 닫기)
 *     닫힌 뒤에는 원래 ☰ 버튼으로 포커스를 돌려주세요 (CLAUDE.md 규칙).
 * - menus: [{ text, href, items: [{ label, href }] }, ...]  (없으면 Figma 시안의 메뉴 5개)
 * - links: 아래쪽 링크 [{ label, href, lang }, ...]  (없으면 로그인 · 검색 · ENG)
 *
 * 화면에 나타나면 X 버튼에 포커스가 가고, 스크린리더에는 '전체 메뉴' 창으로 알려준다.
 */
const defaultMenus = [
  { text: '소개' },
  {
    text: '전시·행사·교육',
    items: [{ label: '전시' }, { label: '문화생활' }, { label: '교육이벤트' }, { label: '서울미디어시티비엔날레' }, { label: '서울사진축제' }],
  },
  { text: '전시해설', items: [{ label: '일정찾기' }] },
  {
    text: '소장품과 미술연구',
    items: [{ label: 'SeMA 소장품' }, { label: '미술아카이브' }, { label: "모두의 연구실 '코랄'" }, { label: 'SeMA 도서와 자료' }],
  },
  {
    text: '방문하기',
    items: [
      { label: '접근성 안내' },
      { label: '서소문 본관' },
      { label: '북서울미술관' },
      { label: '서서울미술관' },
      { label: '미술아카이브' },
      { label: '사진미술관' },
      { label: '난지미술창작스튜디오' },
      { label: '백남준을 기억하는 집' },
    ],
  },
]

const defaultLinks = [{ label: '로그인' }, { label: '검색' }, { label: 'ENG', lang: 'en' }]

function Nav({ onClose, menus = defaultMenus, links = defaultLinks, className = '' }) {
  const [openIndex, setOpenIndex] = useState(null) // 펼쳐진 메뉴 번호 (없으면 null — Figma 01)
  const [closing, setClosing] = useState(false) // 오른쪽으로 미끄러져 나가는 중
  const closeBtnRef = useRef(null)

  // 닫기: 먼저 오른쪽으로 미끄러져 나가는 움직임을 보여주고, 끝나면 onClose 실행
  const requestClose = () => setClosing(true)
  const handleAnimationEnd = (event) => {
    if (closing && event.target === event.currentTarget) onClose?.()
  }

  // 화면에 나타나면 X 버튼에 포커스
  // preventScroll: 메뉴가 오른쪽 바깥에서 밀려 들어오는 중이라, 그냥 포커스하면
  // 브라우저가 버튼을 보여주려고 화면을 옆으로 당겨서 슬라이드가 튀어 보인다
  useEffect(() => {
    closeBtnRef.current?.focus({ preventScroll: true })
  }, [])

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') requestClose()
  }

  return (
    <div
      className={`nav ${closing ? 'nav--closing' : ''} ${className}`.replace(/\s+/g, ' ').trim()}
      onAnimationEnd={handleAnimationEnd}
      role="dialog"
      aria-modal="true"
      aria-label="전체 메뉴"
      onKeyDown={handleKeyDown}
    >
      <div className="nav__top">
        <TopNavMobile menuOpen buttonRef={closeBtnRef} onMenuClick={requestClose} />
        <nav aria-label="주 메뉴">
          {menus.map((menu, i) => (
            <Menu
              key={menu.text}
              text={menu.text}
              href={menu.href}
              items={menu.items}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </nav>
      </div>

      <ul className="nav__bottom" role="list">
        {links.map((link) => (
          <li key={link.label} lang={link.lang}>
            {link.href ? (
              <a className="nav__link" href={link.href}>
                {link.label}
              </a>
            ) : (
              link.label
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav
