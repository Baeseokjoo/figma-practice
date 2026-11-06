import './FooterSubText.css'

/**
 * 푸터의 점(•) 목록 한 줄 — Figma: Footer-SubText (node 227:3026, Base / HOV)
 *
 * - href가 있으면 링크(<a>)로 그리고, 마우스를 올리면 HOV 모양(회색 글자)이 된다.
 * - href가 없으면 글자만 보여준다.
 */
function FooterSubText({ text = '전시실에서 사진 촬영이 가능한가요?', href, className = '' }) {
  const classes = `footer-sub-text ${className}`.trim()

  if (href) {
    return (
      <a className={classes} href={href}>
        {text}
      </a>
    )
  }

  return <p className={classes}>{text}</p>
}

export default FooterSubText
