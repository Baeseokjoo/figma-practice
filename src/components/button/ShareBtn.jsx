import './ShareBtn.css'

/**
 * 공유하기 버튼 — Figma: Share-BTN (node 284:4279)
 *
 * - onClick: 눌렀을 때 실행할 함수 (보통 공유 목록 열기/닫기)
 * - expanded: 공유 목록이 열려 있는지 (스크린리더에 열림/닫힘 알림)
 * - controls: 이 버튼이 여닫는 목록의 id
 * - ref: 목록을 닫은 뒤 이 버튼으로 포커스를 돌려줄 때 사용
 */
function ShareBtn({ text = '공유하기', expanded, controls, ref, className = '', ...rest }) {
  return (
    <button
      ref={ref}
      className={`share-btn ${className}`.trim()}
      type="button"
      aria-expanded={expanded}
      aria-controls={controls}
      {...rest}
    >
      {text}
    </button>
  )
}

export default ShareBtn
