import './ViewBtn.css'
import arrowIcon from '../../assets/icons/icon-arrow-right.png'

/**
 * 「자세히 보기」 버튼 — Figma: view-BTN (node 227:2195, Base / HOV)
 *
 * - href가 있으면 링크(<a>, 다른 페이지로 이동), 없으면 버튼(<button>, 동작 실행)으로 그린다.
 * - 화살표 아이콘은 장식이라 스크린리더가 읽지 않도록 alt="" 처리.
 *
 * 사용 예:
 *   <ViewBtn href="/detail/1">자세히 보기</ViewBtn>
 *   <ViewBtn onClick={handleClick}>자세히 보기</ViewBtn>
 */
function ViewBtn({ children = '자세히 보기', href, type = 'button', className = '', ...rest }) {
  const classes = `view-btn ${className}`.trim()
  const content = (
    <>
      <span className="view-btn__label">{children}</span>
      <img className="view-btn__icon" src={arrowIcon} alt="" width="24" height="24" />
    </>
  )

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} type={type} {...rest}>
      {content}
    </button>
  )
}

export default ViewBtn
