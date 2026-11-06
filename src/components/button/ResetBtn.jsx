import iconReset from '../../assets/icons/icon-reset.png'
import './ResetBtn.css'

/**
 * 초기화 버튼 — Figma: Reset-BTN (node 336:2770, Base / HOV)
 * 검색 조건(분관·날짜)을 한 번에 처음 상태로 되돌릴 때 사용 (FR-02)
 *
 * - onClick: 눌렀을 때 실행할 함수
 * - icon: 아이콘 그림 (기본 초기화 아이콘). Figma에서 아이콘만 바꿔 끼운 경우에 사용
 *     예) Error-Info/Desktop의 '✕ 닫기' 버튼 → <ResetBtn icon={iconClose} text="닫기" />
 * - 아이콘은 장식이라 스크린리더가 읽지 않도록 alt="" 처리.
 */
function ResetBtn({ text = '초기화', icon = iconReset, className = '', ...rest }) {
  return (
    <button className={`reset-btn ${className}`.trim()} type="button" {...rest}>
      <img className="reset-btn__icon" src={icon} alt="" width="24" height="24" />
      {text}
    </button>
  )
}

export default ResetBtn
