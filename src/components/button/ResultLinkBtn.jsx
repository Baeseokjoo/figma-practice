import './ResultLinkBtn.css'

/**
 * 결과 바로가기 버튼 — Figma: ResailtLink-BTN (node 284:4183, Base / HOV)
 * Figma 레이어명 오타(Resailt)는 코드에서 Result로 정정
 * 예) 휴관일·결과 0건일 때 '가장 가까운 전시해설 일자 바로가기' (FR-06)
 *
 * - href가 있으면 링크(<a>), 없으면 버튼(<button>, onClick 실행)으로 그린다.
 */
function ResultLinkBtn({ text = '가장 가까운 전시해설 일자 바로가기', href, className = '', ...rest }) {
  const classes = `result-link-btn ${className}`.trim()

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {text}
      </a>
    )
  }

  return (
    <button className={classes} type="button" {...rest}>
      {text}
    </button>
  )
}

export default ResultLinkBtn
