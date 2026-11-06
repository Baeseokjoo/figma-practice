import './ErrorMessageDesktop.css'

/**
 * 오류·안내 메시지 상자 (데스크탑) — Figma: Error 데스크탑 (node 489:12350)
 * 'Error'는 JavaScript 기본 기능 이름과 겹쳐서 코드에서는 ErrorMessageDesktop으로 사용
 * 모바일(ErrorMessage)보다 안쪽 여백이 넓고(20px) 글자가 Medium 굵기다.
 *
 * 예) '10월 6일 (월) 서소문 본관 휴관일입니다. 다른 날짜나 분관을 선택해 주세요.'
 * - date / place / error: 첫 줄에 들어갈 날짜·분관·사유 (예: '휴관일')
 * - message: 둘째 줄 안내 문구
 * 화면에 나타나면 스크린리더가 바로 읽어준다 (role="alert").
 */
function ErrorMessageDesktop({
  date = '10월 6일 (월)',
  place = '서소문 본관',
  error = '휴관일',
  message = '다른 날짜나 분관을 선택해 주세요.',
  className = '',
}) {
  return (
    <div className={`error-message-desktop ${className}`.trim()} role="alert">
      <p>
        {date} {place} {error}입니다.
      </p>
      <p>{message}</p>
    </div>
  )
}

export default ErrorMessageDesktop
