import './MuseumBtn.css'

/**
 * 분관 선택 버튼 (알약 모양) — Figma: Museum-BTN (node 468:8406, Base / HOV)
 *
 * - text: 분관 이름
 * - selected: true면 HOV 모양(눌린 모양)으로 고정 — 현재 선택된 분관.
 *   스크린리더에는 '선택됨'으로 알려준다.
 * - onClick: 눌렀을 때 실행할 함수
 */
function MuseumBtn({ text = '서소문본관', selected = false, className = '', ...rest }) {
  const classes = `museum-btn ${selected ? 'is-selected' : ''} ${className}`.replace(/\s+/g, ' ').trim()

  return (
    <button className={classes} type="button" aria-pressed={selected} {...rest}>
      {text}
    </button>
  )
}

export default MuseumBtn
