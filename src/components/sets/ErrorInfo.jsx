import ErrorInfoMobile from '../info/ErrorInfoMobile.jsx'
import ErrorInfoDesktop from '../info/ErrorInfoDesktop.jsx'

/**
 * 휴관일·결과 없음 안내 (반응형 세트) — Figma: Error-Info 세트 (node 491:15195, Mobile / Desktop)
 *
 * 화면 1024px 미만은 ErrorInfoMobile, 이상은 ErrorInfoDesktop('닫기' 버튼 포함)을 보여준다.
 * 받은 값(date, place, error, message, linkText, linkHref, onLinkClick, onClose)은
 * 두 컴포넌트에 똑같이 전달된다. onClose('닫기')는 데스크탑에서만 쓰인다.
 */
function ErrorInfo({ className = '', ...props }) {
  return (
    <div className={`error-info ${className}`.trim()}>
      <div className="show-mobile">
        <ErrorInfoMobile {...props} />
      </div>
      <div className="show-desktop">
        <ErrorInfoDesktop {...props} />
      </div>
    </div>
  )
}

export default ErrorInfo
