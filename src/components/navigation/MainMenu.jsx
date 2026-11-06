import './MainMenu.css'

/**
 * 데스크탑 주 메뉴 한 칸 — Figma: MainMenu (node 404:5705, Base / HOV)
 * 마우스를 올리면(HOV) 아래에 굵은 선이 생긴다.
 *
 * - text: 메뉴 이름
 * - href가 있으면 링크(<a>), onClick이 있으면 버튼(<button>), 둘 다 없으면 글자만
 * - active: true면 HOV 모양으로 고정 (현재 보고 있는 메뉴)
 */
function MainMenu({ text = '소개', href, onClick, active = false, className = '' }) {
  const classes = `main-menu ${active ? 'is-active' : ''} ${className}`.replace(/\s+/g, ' ').trim()

  if (href) {
    return (
      <a className={classes} href={href} aria-current={active ? 'page' : undefined}>
        {text}
      </a>
    )
  }
  if (onClick) {
    return (
      <button className={classes} type="button" onClick={onClick}>
        {text}
      </button>
    )
  }
  return <span className={classes}>{text}</span>
}

export default MainMenu
