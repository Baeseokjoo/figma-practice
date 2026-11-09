import './MainMenu.css'

/**
 * 데스크탑 주 메뉴 한 칸 — Figma: MainMenu (node 404:5705, Base / HOV)
 * 마우스를 올리면(HOV) 아래에 굵은 선이 생긴다.
 *
 * - text: 메뉴 이름
 * - href가 있으면 링크(<a>), onClick이 있으면 버튼(<button>), 둘 다 없으면 글자만
 * - active: true면 HOV 모양으로 고정 (현재 보고 있는 메뉴, 하위 메뉴가 열린 메뉴)
 * - expanded: 버튼일 때 하위 메뉴가 열려 있는지 (스크린리더에 열림/닫힘 알림, 없으면 생략)
 */
function MainMenu({ text = '소개', href, onClick, active = false, expanded, className = '' }) {
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
      <button className={classes} type="button" aria-expanded={expanded} onClick={onClick}>
        {text}
      </button>
    )
  }
  return <span className={classes}>{text}</span>
}

export default MainMenu
