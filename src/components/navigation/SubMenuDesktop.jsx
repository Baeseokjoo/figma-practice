import './SubMenuDesktop.css'

/**
 * 데스크탑 하위 메뉴 한 칸 (검은 배경) — Figma: Sub-Menu 데스크탑 (node 491:13868, Base / HOV)
 * 마우스를 올리면(HOV) 글자 아래에 흰 선이 생긴다.
 * 모바일 SubMenu(Sub-Menu)와 이름이 겹쳐서 코드에서는 SubMenuDesktop으로 사용
 *
 * - text: 메뉴 이름 (예: '일정찾기')
 * - href가 있으면 링크(<a>), onClick이 있으면 버튼(<button>), 둘 다 없으면 글자만
 */
function SubMenuDesktop({ text = '일정찾기', href, onClick, className = '' }) {
  const classes = `sub-menu-desktop ${className}`.trim()
  const content = <span className="sub-menu-desktop__text">{text}</span>

  if (href) {
    return (
      <a className={classes} href={href}>
        {content}
      </a>
    )
  }
  if (onClick) {
    return (
      <button className={classes} type="button" onClick={onClick}>
        {content}
      </button>
    )
  }
  return <span className={classes}>{content}</span>
}

export default SubMenuDesktop
