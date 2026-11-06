import { useId, useState } from 'react'
import SubMenu from './SubMenu.jsx'
import iconSubmenu from '../../assets/icons/icon-submenu.png'
import './Menu.css'

/**
 * 전체 메뉴의 한 묶음 — Figma: Menu (node 227:3039)
 * SubMenu 컴포넌트를 안에서 사용한다.
 *
 * - items가 있으면: 제목이 버튼이 되어 누를 때마다 하위 메뉴가 열리고 닫힌다 (아코디언).
 * - items가 없으면: 제목만 보여준다. href를 주면 링크가 된다.
 * - defaultOpen: 처음에 하위 메뉴를 열어둘지 (Figma 시안은 열린 상태)
 * - open / onToggle: 바깥에서 열림 상태를 정할 때 사용 (예: NAV에서 '한 번에 하나만 열기')
 *     open을 주면 defaultOpen은 무시되고, 제목을 누르면 onToggle이 실행된다.
 */
function Menu({ text = '소개', items, href, defaultOpen = true, open: openProp, onToggle, className = '' }) {
  const [openState, setOpenState] = useState(defaultOpen)
  const isControlled = openProp !== undefined
  const open = isControlled ? openProp : openState
  const setOpen = (next) => (isControlled ? onToggle?.() : setOpenState(next))
  const subMenuId = useId()
  const hasSubMenu = Array.isArray(items) && items.length > 0

  let main
  if (hasSubMenu) {
    main = (
      <button
        className="menu__main"
        type="button"
        aria-expanded={open}
        aria-controls={subMenuId}
        onClick={() => setOpen(!open)}
      >
        <span className="menu__text">{text}</span>
        <img className="menu__icon" src={iconSubmenu} alt="" width="24" height="24" />
      </button>
    )
  } else if (href) {
    main = (
      <a className="menu__main" href={href}>
        <span className="menu__text">{text}</span>
      </a>
    )
  } else {
    main = (
      <p className="menu__main">
        <span className="menu__text">{text}</span>
      </p>
    )
  }

  return (
    <div className={`menu ${className}`.trim()}>
      {main}
      {hasSubMenu && open && <SubMenu id={subMenuId} items={items} />}
    </div>
  )
}

export default Menu
