import { useEffect, useRef, useState } from 'react'
import TopNav from '../components/sets/TopNav.jsx'
import Display from '../components/sets/Display.jsx'
import MuseumList from '../components/sets/MuseumList.jsx'
import NewsText from '../components/sets/NewsText.jsx'
import ExhibitionInfo from '../components/sets/ExhibitionInfo.jsx'
import Nav from '../components/navigation/Nav.jsx'
import DisplayText from '../components/text/DisplayText.jsx'
import Section3Text from '../components/text/Section3Text.jsx'
import FooterText from '../components/text/FooterText.jsx'
import FooterSubText from '../components/text/FooterSubText.jsx'
import Card from '../components/card/Card.jsx'
import CardImage from '../components/card/CardImage.jsx'
import { navMenus, desktopMenus } from './menu.js'
import program01 from '../assets/images/program-01.jpg'
import program02 from '../assets/images/card-sample.jpg'
import program03 from '../assets/images/program-03.jpg'
import program04 from '../assets/images/program-04.jpg'
import program05 from '../assets/images/program-05.jpg'
import program06 from '../assets/images/program-06.jpg'
import program07 from '../assets/images/program-07.jpg'
import program08 from '../assets/images/program-08.jpg'
import collection from '../assets/images/collection.jpg'
import logoWaMark from '../assets/images/logo-wa-mark.png'
import logoBookstore from '../assets/images/logo-seoul-bookstore.png'
import iconCulture from '../assets/icons/icon-culture.png'
import iconFacebook from '../assets/icons/icon-sns-facebook.png'
import iconTwitter from '../assets/icons/icon-sns-twitter.png'
import iconInstagram from '../assets/icons/icon-sns-instagram.png'
import iconYoutube from '../assets/icons/icon-sns-youtube.png'
import iconKakao from '../assets/icons/icon-sns-kakao.png'
import './MainPage.css'

/**
 * 메인 화면 — Figma: 3-4.완성본 › Mobile › Mobile-Main (node 284:4341)
 * 구성: 상단바 · 전시 슬라이드 / 미술관 / 전시와 프로그램 / 소장품과 미술연구 / 뉴스와 공지 / 푸터
 * 푸터는 Figma에서 컴포넌트가 아니라서 이 화면 안에 보이는 그대로 작성했다.
 */
const programs = [
  { image: program01, title: '2026 학교 연계 프로그램 〈틀릴수록 완성〉', category: '교육프로그램', place: '서울시립미술관 서소문본관', date: '2026/11/17~2026/12/11', close: '2026/11/02 까지 모집' },
  { image: program02, title: '[Seo SeMA 뉴미디어 패밀리랩] 어린이 가족 프로그램 〈빛으로 그리는 우리의 시간', category: '교육프로그램', place: '서울시립 서서울미술관', date: '2026/11/14~2026/11/28', close: '2026/11/26 까지 모집' },
  { image: program03, title: '2026 SeMA 11월 외국어 전시해설', category: '교육프로그램', place: '서울시립미술관 서소문본관', date: '상시', close: '2026/11/25 까지 모집' },
  { image: program04, title: '나란히 보는 미술관 2026 타이틀 매치 《오인환 vs. 장서영:휴먼 에러》', category: '교육프로그램', place: '서울시립 북서울미술관', date: '상시', close: '2026/10/15 까지 모집' },
  { image: program05, title: '《유영국: 산은 내 안에 있다》전시 연계 프로그램 〈한국 추상 미술 70년과 유영국〉', category: '교육프로그램', place: '서울시립미술관 서소문본관', date: '2026/10/23~2026/10/23', close: '2026/10/22 까지 모집' },
  { image: program06, title: '밤마중 미술관', category: '문화행사', icon: iconCulture, place: '서울시립 미술아카이브', date: '2026/10/23~2026/10/23', close: '모집완료' },
  { image: program07, title: '[도슨트 토크토크] 한국 대표 조각가전 《조숙진: 지나가는 자리》 연계', category: '교육프로그램', place: '서울시립 남서울미술관', date: '상시', close: '2026/10/21 까지 모집' },
  { image: program08, title: '[Seo SeMA 뉴미디어 아트리딩] 성인 프로그램 〈뉴미디어를 읽는 여덟 번의 테이블〉', category: '교육프로그램', place: '서울시립 서서울미술관', date: '2026/10/20~2026/12/08', close: '2026/12/06 까지 모집' },
]

const collections = [
  { title: 'SeMA 소장품', sub: '서울시립미술관이 소장한 10,245점을 살펴보세요.' },
  { title: '미술아카이브', sub: '현대미술의 중요한 기록을 수집·보존·연구하고 전시합니다.' },
  { title: "모두의 연구실 '코랄'", sub: '웹을 기반으로 지식 생산자와 사용자가 만나며 다양한 형태의 미술 지식을 탐구하여 미술 지식의 확장 가능성을 실험하는 공간입니다.' },
  { title: 'SeMA 도서와 자료', sub: '미술관이 소장하고 있는 미술관련 도서의 정보를 제공합니다.' },
]

const news = [
  { title: '서울시립 북서울미술관, 영유아 동반 가족 프로그램 〈댄싱 패밀리〉 개최', date: '2026.10.01' },
  { title: '서울특별시립미술관(본관) 근린생활시설(카페) 사용·수익허가 사업자 선정 입찰 공고', date: '2026.09.22' },
  { title: "서울시립 북서울미술관, 국내 미술관 최초 CIMAM'최우수 실천상' 수상", date: '2026.09.18' },
  { title: '서울시립미술관, 추석연휴 7개 관 정상 운영. 유영국부터 마틴 파까지... 서울 전역 7개 관에서 만나는 근현대 대표 작가 8인의 작품 세계', date: '2026.09.17' },
  { title: '서울시립 서서울미술관, 금천 지역 문화예술 공간 6곳과 손잡는다... 첫 협력 사업으로 플레이 라운지 《어쩌면 우리에게 더 멋진 일이 있을지도 몰라》 개최', date: '2026.09.17' },
]

const footerLinks1 = ['미술관 소개', '뉴스와 공지', '지원과 양성', '시설대관', '후원회 SeMA人[in]', '기증자 전당']
const footerLinks2 = ['응답소', 'SeMA 뉴스레터', '도슨팅앱 다운로드']
const faqs = [
  '전시실에서 사진 촬영이 가능한가요?',
  '시립미술간에서 발간한 전시 관련 도서 및 도록은 어디서 구매하나요?',
  '소장품의 수집은 어떻게 이루어지나요?',
  '서울시립 미술아카이브는 어떤 곳인가요?',
]
const snsList = [
  { label: '페이스북', icon: iconFacebook },
  { label: '트위터(X)', icon: iconTwitter },
  { label: '인스타그램', icon: iconInstagram },
  { label: '유튜브', icon: iconYoutube },
  { label: '카카오톡 채널', icon: iconKakao },
]

function MainPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [infoItem, setInfoItem] = useState(null) // ⓘ 버튼으로 연 전시 정보
  const [infoByHover, setInfoByHover] = useState(false) // 마우스를 올려서 열었는지 (벗어나면 닫힘)
  const menuBtnRef = useRef(null)
  const displayRef = useRef(null)

  const closeMenu = () => {
    setMenuOpen(false)
    menuBtnRef.current?.focus() // 메뉴를 닫으면 ☰ 버튼으로 포커스 복귀
  }

  /* 전시 정보 창 (Figma 프로토타입: ⓘ에 마우스를 올리면 ⓘ 바로 아래에 창, 배경 흐림 없음)
   *   - 마우스 올리기: 열림 → 슬라이드·창 밖으로 나가면 닫힘
   *   - 누르기: 열린 채로 고정 → 다시 누르기 / 바깥 누르기 / ESC로 닫힘 (ESC는 ⓘ 버튼으로 포커스 복귀) */
  const openInfoByHover = (item) => {
    if (infoItem) return
    setInfoItem(item)
    setInfoByHover(true)
  }
  const toggleInfoByClick = (item) => {
    if (infoItem && !infoByHover) {
      setInfoItem(null)
      return
    }
    setInfoItem(item)
    setInfoByHover(false)
  }

  useEffect(() => {
    if (!infoItem) return undefined
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      setInfoItem(null)
      displayRef.current?.querySelector('.display__btn--info')?.focus()
    }
    // 창과 ⓘ 버튼 바깥을 누르면 닫힘 (ⓘ 버튼은 자기 onClick에서 처리)
    const onPointerDown = (e) => {
      if (!e.target.closest('.main-page__info, .display__btn--info')) setInfoItem(null)
    }
    window.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [infoItem])

  return (
    <div className="main-page">
      {/* ---------- Heading ---------- */}
      <TopNav menus={desktopMenus} menuOpen={menuOpen} buttonRef={menuBtnRef} onMenuClick={() => setMenuOpen(!menuOpen)} />

      <main>
        <section
          ref={displayRef}
          className="main-page__display"
          aria-label="주요 전시"
          onMouseLeave={() => infoByHover && setInfoItem(null)}
        >
          <Display
            onInfoClick={toggleInfoByClick}
            onInfoHover={openInfoByHover}
            infoOpen={Boolean(infoItem)}
            paused={Boolean(infoItem)}
          />

          {/* ---------- 전시 정보 창 (Exhibition-Info) — ⓘ 바로 아래, 오른쪽 맞춤 ---------- */}
          {infoItem && (
            <div className="main-page__info" role="dialog" aria-label={`${infoItem.title} 전시 정보`}>
              <ExhibitionInfo title={infoItem.title} place={infoItem.sub} schedule={infoItem.schedule} />
            </div>
          )}
        </section>

        {/* ---------- Section-01 미술관 ---------- */}
        <section className="main-page__section">
          <DisplayText title="미술관" sub="서울특별시 곳곳에 있는 서울시립미술관을 만나보세요." showSchedule={false} />
          <MuseumList />
        </section>

        {/* ---------- Section-02 전시와 프로그램 ---------- */}
        <section className="main-page__section">
          <DisplayText title="전시와 프로그램" sub="미술관에서 진행하는 다양한 교육과 프로그램을 살펴보고, 직접 참여할 수 있습니다." showSchedule={false} />
          <div className="main-page__cards">
            {programs.map((p) => (
              <Card key={p.title} {...p} />
            ))}
          </div>
        </section>

        {/* ---------- Section-03 소장품과 미술연구 ---------- */}
        <section className="main-page__section">
          <DisplayText
            title="소장품과 미술연구"
            sub="미술관 소장품을 중심으로 한국현대미술사의 중요한 맥락을 밝하는 연구물을 생산하고 출판합니다."
            showSchedule={false}
          />
          <div className="main-page__collection">
            <CardImage className="main-page__collection-image" src={collection} />
            <div className="main-page__collection-text">
              {collections.map((c) => (
                <Section3Text key={c.title} title={c.title} sub={c.sub} />
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Section-04 뉴스와 공지 ---------- */}
        <section className="main-page__section">
          <DisplayText title="뉴스와 공지" sub="미술관의 새로운 소식을 홈페이지를 통해 발 빠르게 전해드립니다." showSchedule={false} />
          <div className="main-page__news">
            {news.map((n) => (
              <NewsText key={n.title} title={n.title} category="보도자료" date={n.date} />
            ))}
          </div>
        </section>
      </main>

      {/* ---------- Footer (Figma에서 컴포넌트가 아니라 보이는 그대로 작성) ---------- */}
      <footer className="main-page__footer">
        <div className="main-page__footer-main">
          <div className="main-page__footer-title">
            <p>서울시립미술관</p>
            <p lang="en">SEOUL MUSEUM OF ART</p>
          </div>
          <div className="main-page__footer-group">
            {footerLinks1.map((t) => (
              <FooterText key={t} text={t} />
            ))}
          </div>
          <div className="main-page__footer-group">
            {footerLinks2.map((t) => (
              <FooterText key={t} text={t} />
            ))}
          </div>
          <div className="main-page__footer-group main-page__footer-group--last">
            <FooterText text="자주 묻는 질문" />
            {faqs.map((t) => (
              <FooterSubText key={t} text={t} />
            ))}
          </div>
        </div>

        <div className="main-page__footer-sub">
          <ul className="main-page__footer-sns" role="list" aria-label="서울시립미술관 SNS">
            {snsList.map((s) => (
              <li key={s.label}>
                <img src={s.icon} alt={s.label} width="24" height="24" />
              </li>
            ))}
          </ul>
          <div className="main-page__footer-info">
            <p>서울 중구 덕수궁길 61</p>
            <p>(대표자) 최은주, (사업자등록번호) 101-83-02866</p>
            <p>(대표번호) 02-2124-8800, 02-120</p>
            <p>(직원찾기) 직원 및 연락처</p>
          </div>
          <div className="main-page__footer-info">
            <p>개인정보처리방침</p>
            <p>이메일무단수집거부</p>
          </div>
          <div className="main-page__footer-logos">
            <img src={logoWaMark} alt="과학기술정보통신부 WEB 접근성 품질인증 마크" width="120" height="88" />
            <img src={logoBookstore} alt="서울책방" width="120" height="62" />
          </div>
        </div>
      </footer>

      {/* ---------- 전체 메뉴 (NAV-01 ~ 05) ---------- */}
      {menuOpen && (
        <div className="main-page__overlay">
          <Nav menus={navMenus} onClose={closeMenu} />
        </div>
      )}
    </div>
  )
}

export default MainPage
