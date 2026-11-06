import './FooterText.css'

/**
 * 푸터 메뉴 글자 — Figma: Footer-Text (node 227:2921, Base / HOV)
 *
 * - href가 있으면 링크(<a>)로 그리고, 마우스를 올리면 HOV 모양(회색 글자)이 된다.
 * - href가 없으면 글자만 보여준다.
 */
function FooterText({ text = '미술관 소개', href, className = '' }) {
  const classes = `footer-text ${className}`.trim()

  if (href) {
    return (
      <a className={classes} href={href}>
        {text}
      </a>
    )
  }

  return <p className={classes}>{text}</p>
}

export default FooterText
