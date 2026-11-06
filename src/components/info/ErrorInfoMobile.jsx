import ErrorMessage from './ErrorMessage.jsx'
import ResultLinkBtn from '../button/ResultLinkBtn.jsx'
import './ErrorInfoMobile.css'

/**
 * 휴관일·결과 없음 안내 (모바일) — Figma: Error-Info/Mobile (node 491:15149)
 * ErrorMessage + ResultLinkBtn 컴포넌트를 안에서 사용한다. (FR-06)
 *
 * - date / place / error / message: ErrorMessage로 그대로 전달
 * - linkText: 아래 버튼 글자
 * - linkHref: 버튼을 링크로 쓸 때 주소 / onLinkClick: 버튼으로 쓸 때 실행할 함수
 */
function ErrorInfoMobile({ date, place, error, message, linkText, linkHref, onLinkClick, className = '' }) {
  return (
    <div className={`error-info-mobile ${className}`.trim()}>
      <ErrorMessage date={date} place={place} error={error} message={message} />
      <ResultLinkBtn text={linkText} href={linkHref} onClick={onLinkClick} />
    </div>
  )
}

export default ErrorInfoMobile
