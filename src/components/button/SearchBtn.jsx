import './SearchBtn.css'

/**
 * 조회 버튼 — Figma: Search-BTN (node 227:3751, Base / HOV)
 *
 * - type: 기본 'submit' (검색 조건 <form> 안에서 누르면 조회 실행). 폼 밖에서 쓰면 'button'으로.
 */
function SearchBtn({ text = '조회하기', type = 'submit', className = '', ...rest }) {
  return (
    <button className={`search-btn ${className}`.trim()} type={type} {...rest}>
      {text}
    </button>
  )
}

export default SearchBtn
