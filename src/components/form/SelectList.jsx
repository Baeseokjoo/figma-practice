import './SelectList.css'

/**
 * 선택 목록의 한 칸 — Figma: Select-List (node 227:3787, Base / Click)
 *
 * - selected=true면 Click 모양으로 고정된다 (현재 선택된 항목).
 *   마우스를 올렸을 때·누르는 중·키보드 포커스 때도 Click 모양이 된다.
 * - 선택 상태는 색뿐 아니라 그림자로도 구분되고, 스크린리더에는 '선택됨'으로 알려진다.
 */
function SelectList({ text = '서소문 본관', selected = false, className = '', ...rest }) {
  const classes = `select-list ${selected ? 'is-selected' : ''} ${className}`.replace(/\s+/g, ' ').trim()

  return (
    <button className={classes} type="button" aria-pressed={selected} {...rest}>
      {text}
    </button>
  )
}

export default SelectList
