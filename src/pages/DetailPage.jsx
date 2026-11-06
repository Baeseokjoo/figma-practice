import { useNavigate } from 'react-router-dom'
import NavTopPage from '../components/navigation/NavTopPage.jsx'
import TopNav from '../components/sets/TopNav.jsx'
import DetailCard from '../components/sets/DetailCard.jsx'
import MainpageBtn from '../components/button/MainpageBtn.jsx'
import { desktopMenus } from './menu.js'
import './DetailPage.css'

/**
 * 상세페이지
 *   모바일 — Figma: Mobile-DetailPage (365:1243): ← 상세페이지 상단바 + 카드('공유하기' 버튼) + 안내문 + 메인화면 버튼
 *   데스크탑 — Figma: Desktop-DetailPage (468:8534): 상단 메뉴바 + 경로(전시해설 상세정보) + 카드(공유 목록 항상 보임) + 안내문
 * 안내문(※ 시간 및 장소 / ※ 이용안내 / ※ 문의)은 Figma에서 컴포넌트가 아니라 보이는 그대로 작성했다.
 */
const guides = [
  { text: '-2026년 5월 20일 ~ 10월 22일까지 운영되는 전시해설입니다.' },
  { text: '-미술관 휴관일 및 월요일, 개막 당일에는 전시 해설을 운영하지 않습니다.' },
  { text: '-(추석 연휴 9월 24일, 25일, 26일 전시해설 미운영)' },
  { text: '-10시부터 20명 현장 접수 진행 (리시버 교환 번호표 배부 장소: 1층 안내데스크)', tone: 'secondary' },
  { text: '-리시버 교환 번호표 1개 당 리시버 1대를 대여할 수 있습니다.' },
  { text: '-현장 도슨트 외, 오디오 가이드(유료)를 대여할 수 있으니 참고해주시기 바랍니다.' },
  { text: '-리시버의 분실과 훼손을 방지하기 위해, 현장에서 소정의 개인정보 제출을 요청하고 있습니다. 이용에 참고해주시기 바랍니다.', tone: 'primary' },
  { text: '-신분증 및 운전면허증 등. 본인을 증명할 수 있는 서류를 준비해오시기 바랍니다.', tone: 'primary' },
]

function DetailPage() {
  const navigate = useNavigate()

  return (
    <div className="detail-page">
      {/* 모바일 상단바 */}
      <div className="show-mobile">
        <NavTopPage text="상세페이지" onBack={() => navigate(-1)} />
      </div>

      {/* 데스크탑 상단 메뉴바 + Userflow */}
      <div className="show-desktop">
        <TopNav menus={desktopMenus} />
        <nav className="detail-page__flow" aria-label="현재 위치">
          <p aria-current="page">전시해설 상세정보</p>
        </nav>
      </div>

      <main className="detail-page__body">
        <DetailCard />

        {/* Info — 안내문 */}
        <div className="detail-page__info">
          <section className="detail-page__group">
            <h2 className="detail-page__heading">※ 시간 및 장소</h2>
            <p>-시간 : 오전 11:00</p>
            <p>-장소 : 서소문 본관 1층 전시실</p>
          </section>

          <section className="detail-page__group">
            <h2 className="detail-page__heading">※ 이용안내</h2>
            {guides.map((g) => (
              <p key={g.text} className={g.tone ? `detail-page__text--${g.tone}` : undefined}>
                {g.text}
              </p>
            ))}
          </section>

          <section className="detail-page__group">
            <h2 className="detail-page__heading">※ 문의</h2>
            <p>-대표번호: 02)000-0000 / 0000-0000</p>
          </section>
        </div>
      </main>

      {/* 메인화면 버튼 — 모바일 시안에만 있음 */}
      <div className="detail-page__home">
        <MainpageBtn href="/" />
      </div>
    </div>
  )
}

export default DetailPage
