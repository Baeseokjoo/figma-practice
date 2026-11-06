import iconBack from '../../assets/icons/icon-back.png'
import './NavTopPage.css'

/**
 * 하위 페이지 상단바 — Figma: NAV/TOP-Page (node 284:4176)
 * 뒤로가기 버튼 + 페이지 제목
 *
 * - text: 페이지 제목 (예: '검색결과')
 * - onBack: 뒤로가기 버튼을 눌렀을 때 실행할 함수 (없으면 브라우저 뒤로가기)
 */
function NavTopPage({ text = '검색결과', onBack, className = '' }) {
  const handleBack = onBack ?? (() => window.history.back())

  return (
    <header className={`nav-top-page ${className}`.trim()}>
      <button className="nav-top-page__back" type="button" aria-label="뒤로 가기" onClick={handleBack}>
        <img src={iconBack} alt="" width="44" height="44" />
      </button>
      <h1 className="nav-top-page__title">{text}</h1>
    </header>
  )
}

export default NavTopPage
