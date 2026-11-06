import ErrorMessageDesktop from './ErrorMessageDesktop.jsx'
import ResultLinkBtn from '../button/ResultLinkBtn.jsx'
import ResetBtn from '../button/ResetBtn.jsx'
import iconClose from '../../assets/icons/icon-close.png'
import './ErrorInfoDesktop.css'

/**
 * 휴관일·결과 없음 안내 (데스크탑) — Figma: Error-Info/Desktop (node 490:12368)
 * ErrorMessageDesktop · ResultLinkBtn · ResetBtn(닫기 아이콘) 컴포넌트를 안에서 사용한다. (FR-06)
 * 모바일(ErrorInfoMobile)과 달리 오른쪽 아래에 '닫기' 버튼이 있다.
 *
 * - date / place / error / message: ErrorMessageDesktop으로 그대로 전달
 * - linkText / linkHref / onLinkClick: '가장 가까운 전시해설 일자 바로가기' 버튼
 * - onClose: '닫기' 버튼을 눌렀을 때 실행할 함수
 */
function ErrorInfoDesktop({ date, place, error, message, linkText, linkHref, onLinkClick, onClose, className = '' }) {
  return (
    <div className={`error-info-desktop ${className}`.trim()}>
      <ErrorMessageDesktop date={date} place={place} error={error} message={message} />
      <div className="error-info-desktop__buttons">
        <ResultLinkBtn className="error-info-desktop__link" text={linkText} href={linkHref} onClick={onLinkClick} />
        <ResetBtn icon={iconClose} text="닫기" onClick={onClose} />
      </div>
    </div>
  )
}

export default ErrorInfoDesktop
