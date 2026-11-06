import { useState } from 'react'
import DisplayText from '../text/DisplayText.jsx'
import iconPrev from '../../assets/icons/icon-prev.png'
import iconNext from '../../assets/icons/icon-next.png'
import iconInfo from '../../assets/icons/icon-info.png'
import display01 from '../../assets/images/display-01.jpg'
import display02 from '../../assets/images/display-02.jpg'
import display03 from '../../assets/images/display-03.jpg'
import display04 from '../../assets/images/display-04.jpg'
import display05 from '../../assets/images/display-05.jpg'
import display06 from '../../assets/images/display-06.jpg'
import display07 from '../../assets/images/display-07.jpg'
import display08 from '../../assets/images/display-08.jpg'
import './DisplayMobile.css'

/**
 * 전시 슬라이드 (모바일) — Figma: Display/Mobile (node 227:633, Display01 ~ Display08)
 * DisplayText 컴포넌트를 안에서 사용한다.
 *
 * Figma의 변형 8개(Display01~08)는 '전시 한 장씩'이라, 코드에서는 items 배열 하나로 받고
 * 이전·다음 버튼으로 넘겨 본다. 마지막 장에서 '다음'을 누르면 처음으로 돌아간다.
 *
 * - items: [{ image, title, sub, schedule }, ...]  (없으면 Figma 시안의 전시 8개)
 * - onInfoClick(item): 오른쪽 위 ⓘ 버튼을 눌렀을 때 실행 (현재 전시 정보가 전달됨)
 */
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

function DisplayMobile({ items = defaultItems, onInfoClick, className = '' }) {
  const [index, setIndex] = useState(0)
  const total = items.length
  const item = items[index]

  const goPrev = () => setIndex((index - 1 + total) % total)
  const goNext = () => setIndex((index + 1) % total)

  return (
    <section className={`display-mobile ${className}`.trim()} aria-roledescription="슬라이드" aria-label="전시 소개">
      <div className="display-mobile__image">
        <img className="display-mobile__photo" src={item.image} alt="" />

        <button className="display-mobile__btn display-mobile__btn--prev" type="button" aria-label="이전 전시" onClick={goPrev}>
          <img src={iconPrev} alt="" width="44" height="44" />
        </button>
        <button className="display-mobile__btn display-mobile__btn--next" type="button" aria-label="다음 전시" onClick={goNext}>
          <img src={iconNext} alt="" width="44" height="44" />
        </button>
        <button
          className="display-mobile__btn display-mobile__btn--info"
          type="button"
          aria-label={`${item.title} 전시 정보 보기`}
          onClick={() => onInfoClick?.(item)}
        >
          <img src={iconInfo} alt="" width="59" height="59" />
        </button>
      </div>

      {/* 넘길 때마다 스크린리더가 '3 / 8번째 전시'와 제목을 읽어줌 */}
      <div aria-live="polite">
        <p className="display-mobile__count">
          {index + 1} / {total}번째 전시
        </p>
        <DisplayText title={item.title} sub={item.sub} schedule={item.schedule} />
      </div>
    </section>
  )
}

export default DisplayMobile
