import './SubMenuLink.css'

/**
 * 데스크탑 상단 보조 링크 — Figma: SubMenu (node 404:5829)
 * 예) 로그인 · 🔍 검색 · 🌐 EN
 * 모바일 SubMenu(하위 메뉴 목록)·데스크탑 SubMenuDesktop과 이름이 겹쳐서 코드에서는 SubMenuLink로 사용
 *
 * - text: 글자 / icon: 앞에 붙는 아이콘 그림 (없으면 글자만 — Figma icon 속성 꺼짐)
 * - href가 있으면 링크(<a>), onClick이 있으면 버튼(<button>), 둘 다 없으면 글자만
 * - lang: 글자 언어 (예: 'en' — 스크린리더가 영어로 읽음)
 */
function SubMenuLink({ text = '로그인', icon, href, onClick, lang, className = '' }) {
  const classes = `sub-menu-link ${className}`.trim()
  const content = (
    <>
      {icon && <img src={icon} alt="" width="24" height="24" />}
      {text}
    </>
  )

  if (href) {
    return (
      <a className={classes} href={href} lang={lang}>
        {content}
      </a>
    )
  }
  if (onClick) {
    return (
      <button className={classes} type="button" lang={lang} onClick={onClick}>
        {content}
      </button>
    )
  }
  return (
    <span className={classes} lang={lang}>
      {content}
    </span>
  )
}

export default SubMenuLink
