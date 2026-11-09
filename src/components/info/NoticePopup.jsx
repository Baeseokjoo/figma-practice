import { useEffect, useId, useRef } from 'react'
import SearchBtn from '../button/SearchBtn.jsx'
import './NoticePopup.css'

/**
 * 안내 팝업 — 화면 가운데에 짧은 안내 문구와 버튼 하나를 띄운다. (Figma 시안 없음 — tokens.css 기준으로 작성)
 * 예) '가장 가까운 전시해설 일자 바로가기'를 눌렀는데 이후 운영일이 없을 때
 *     <NoticePopup
 *       message="조회된 날짜 이후의 운영일정이 없습니다."
 *       actionText="일정찾기"
 *       onAction={처음부터 다시 찾기}
 *       onClose={() => setNotice(false)}
 *     />
 * SearchBtn('조회하기'와 같은 모양) 컴포넌트를 안에서 사용한다.
 *
 * - message: 안내 문구
 * - actionText / onAction: 버튼 글자와 눌렀을 때 실행할 함수
 * - onClose: ESC를 누르거나 팝업 바깥을 눌렀을 때 실행할 함수 (팝업만 닫기)
 *
 * 접근성: 열리면 버튼에 포커스가 가고 스크린리더가 문구를 바로 읽어준다(alertdialog).
 *         ESC·바깥 누르기로 닫히면 팝업을 열기 전에 있던 버튼으로 포커스가 돌아간다.
 */
function NoticePopup({ message, actionText = '확인', onAction, onClose, className = '' }) {
  const messageId = useId()
  const actionBtnRef = useRef(null)

  useEffect(() => {
    const opener = document.activeElement // 팝업을 연 버튼 (닫힌 뒤 포커스 복귀용)
    actionBtnRef.current?.focus({ preventScroll: true })
    return () => {
      // 연 버튼이 화면에 남아 있을 때만 되돌림 (버튼 동작으로 화면이 바뀌면 그쪽에서 포커스를 정함)
      if (opener instanceof HTMLElement && opener.isConnected) opener.focus({ preventScroll: true })
    }
  }, [])

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.stopPropagation() // 뒤에 열린 다른 창(오류 안내)까지 함께 닫히지 않게
      onClose?.()
    }
    // 팝업이 열린 동안 Tab 포커스가 팝업 밖으로 나가지 않게 (버튼이 하나뿐이라 제자리 유지)
    if (event.key === 'Tab') {
      event.preventDefault()
      actionBtnRef.current?.focus()
    }
  }

  return (
    <div className={`notice-popup ${className}`.trim()} onClick={onClose} onKeyDown={handleKeyDown}>
      <div
        className="notice-popup__box"
        role="alertdialog"
        aria-modal="true"
        aria-describedby={messageId}
        aria-label="안내"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="notice-popup__message" id={messageId}>
          {message}
        </p>
        <SearchBtn ref={actionBtnRef} className="notice-popup__action" type="button" text={actionText} onClick={onAction} />
      </div>
    </div>
  )
}

export default NoticePopup
