import { useEffect, useState } from 'react'
import DisplayText from '../text/DisplayText.jsx'
import iconPrev from '../../assets/icons/icon-prev.png'
import iconNext from '../../assets/icons/icon-next.png'
import iconInfo from '../../assets/icons/icon-info.png'
import iconPrevLg from '../../assets/icons/icon-prev-lg.png'
import iconNextLg from '../../assets/icons/icon-next-lg.png'
import iconInfoLg from '../../assets/icons/icon-info-lg.png'
import display01 from '../../assets/images/display-01.jpg'
import display02 from '../../assets/images/display-02.jpg'
import display03 from '../../assets/images/display-03.jpg'
import display04 from '../../assets/images/display-04.jpg'
import display05 from '../../assets/images/display-05.jpg'
import display06 from '../../assets/images/display-06.jpg'
import display07 from '../../assets/images/display-07.jpg'
import display08 from '../../assets/images/display-08.jpg'
import './Display.css'

/**
 * 전시 슬라이드 (반응형) — Figma: Display 세트 (node 468:2078, Mobile / Desktop)
 * DisplayText 컴포넌트를 안에서 사용한다.
 *
 * 화면 너비 1024px 미만은 Mobile 모양, 1024px 이상은 Desktop 모양으로 자동으로 바뀐다.
 *   - Mobile : 사진 328×246 비율, 버튼 ‹ › 44px · ⓘ 59px, 장소·기간 두 줄
 *   - Desktop: 사진 1680×652 비율, 버튼 ‹ › 65px · ⓘ 80px, 장소·기간 한 줄
 *
 * - items: [{ image, title, sub, schedule }, ...]  (없으면 Figma 시안의 전시 8개)
 * - onInfoClick(item): 오른쪽 위 ⓘ 버튼을 눌렀을 때 실행 (현재 전시 정보가 전달됨)
 * - onInfoHover(item): ⓘ 버튼에 마우스를 올렸을 때 실행 (Figma 프로토타입: 올리면 정보 창)
 * - infoOpen: 전시 정보 창이 열려 있는지 (ⓘ 버튼의 aria-expanded)
 * - paused: true면 자동 넘김을 멈춤 (예: 전시 정보 창이 열려 있을 때)
 *
 * 자동 넘김 (Figma 프로토타입: 5초 뒤 다음 전시)
 *   마우스를 올리거나 키보드 포커스가 슬라이드 안에 있으면 멈춘다 (KWCAG: 움직이는 콘텐츠 정지 수단).
 *   자동으로 넘어갈 때는 스크린리더가 읽지 않고, 버튼으로 넘길 때만 읽어준다.
 */
const AUTO_DELAY = 5000 // Figma: After delay 5초
const defaultItems = [
  { image: display01, title: '≪오윤≫', sub: '미술아카이브', schedule: '2026/08/20~2027/02/14' },
  { image: display02, title: '서울시립 서서울미술관 미디어 작가전 《김희천: 두더지들》', sub: '서서울미술관', schedule: '2026/08/20~2026/11/08' },
  { image: display03, title: '2026 타이틀 매치 《오인환 vs. 장서영: 휴먼 에러》', sub: '북서울미술관', schedule: '2026/08/13~2026/10/13' },
  { image: display04, title: '조숙진: 지나가는 자리', sub: '남서울미술관', schedule: '2026/07/29~2026/11/15' },
  { image: display05, title: '《마틴 바 We are Mattin Parr》', sub: '사진미술관', schedule: '2026/07/16~2026/10/16' },
  { image: display06, title: '유휴공간 전시 《보편타당한 당신 - 심이다은》', sub: '북서울미술관', schedule: '2026/06/25~2027/04/11' },
  { image: display07, title: '《권병준: 내 마음속의 너는》', sub: '북서울미술관', schedule: '2026/06/11~2027/05/16' },
  { image: display08, title: '2026년 한국 거장전 《유영국: 산은 내 안에 있다》', sub: '서소문본관', schedule: '2026/05/19~2026/10/25' },
]

// 데스크탑(1024px 이상)에서는 큰 아이콘으로 바꿔 보여준다
const DESKTOP = '(min-width: 1024px)'

function Display({ items = defaultItems, onInfoClick, onInfoHover, infoOpen = false, paused = false, className = '' }) {
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [manual, setManual] = useState(false) // 버튼으로 넘겼는지 (스크린리더 알림 여부)
  const total = items.length
  const item = items[index]

  const goPrev = () => {
    setManual(true)
    setIndex((index - 1 + total) % total)
  }
  const goNext = () => {
    setManual(true)
    setIndex((index + 1) % total)
  }

  // 5초마다 다음 전시로 — 멈춤 조건이면 쉬고, 다시 시작하면 처음부터 5초를 센다
  const stopped = paused || hovered || focused || total < 2
  useEffect(() => {
    if (stopped) return undefined
    const timer = setTimeout(() => {
      setManual(false)
      setIndex((i) => (i + 1) % total)
    }, AUTO_DELAY)
    return () => clearTimeout(timer)
  }, [stopped, index, total])

  return (
    <section
      className={`display ${className}`.trim()}
      aria-roledescription="슬라이드"
      aria-label="전시 소개"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setFocused(false)}
    >
      <div className="display__image">
        {/* 사진을 모두 겹쳐 두고 현재 사진만 보이게 — 넘길 때 이전 사진은 서서히 사라지고 새 사진이 서서히 나타남 */}
        {items.map((it, i) => (
          <img
            key={it.image}
            className={`display__photo ${i === index ? 'is-active' : ''}`.trim()}
            src={it.image}
            alt=""
            aria-hidden={i === index ? undefined : true}
          />
        ))}

        <button className="display__btn display__btn--prev" type="button" aria-label="이전 전시" onClick={goPrev}>
          <picture>
            <source media={DESKTOP} srcSet={iconPrevLg} width="65" height="65" />
            <img src={iconPrev} alt="" width="44" height="44" />
          </picture>
        </button>
        <button className="display__btn display__btn--next" type="button" aria-label="다음 전시" onClick={goNext}>
          <picture>
            <source media={DESKTOP} srcSet={iconNextLg} width="65" height="65" />
            <img src={iconNext} alt="" width="44" height="44" />
          </picture>
        </button>
        <button
          className="display__btn display__btn--info"
          type="button"
          aria-label={`${item.title} 전시 정보 보기`}
          aria-expanded={infoOpen}
          onClick={() => onInfoClick?.(item)}
          onMouseEnter={() => onInfoHover?.(item)}
        >
          <picture>
            <source media={DESKTOP} srcSet={iconInfoLg} width="80" height="80" />
            <img src={iconInfo} alt="" width="59" height="59" />
          </picture>
        </button>
      </div>

      {/* 버튼으로 넘길 때만 스크린리더가 '3 / 8번째 전시'와 제목을 읽어줌 (자동 넘김은 읽지 않음) */}
      <div aria-live={manual ? 'polite' : 'off'}>
        <p className="display__count">
          {index + 1} / {total}번째 전시
        </p>
        <DisplayText title={item.title} sub={item.sub} schedule={item.schedule} />
      </div>
    </section>
  )
}

export default Display
