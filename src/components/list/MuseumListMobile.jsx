import { useId, useState } from 'react'
import MuseumListItem from './MuseumListItem.jsx'
import MuseumText from '../text/MuseumText.jsx'
import ViewBtn from '../button/ViewBtn.jsx'
import museum01 from '../../assets/images/museum-01.jpg'
import museum02 from '../../assets/images/museum-02.jpg'
import museum03 from '../../assets/images/museum-03.jpg'
import museum04 from '../../assets/images/museum-04.jpg'
import museum05 from '../../assets/images/museum-05.jpg'
import museum06 from '../../assets/images/museum-06.jpg'
import museum07 from '../../assets/images/museum-07.jpg'
import museum08 from '../../assets/images/museum-08.jpg'
import './MuseumListMobile.css'

/**
 * 분관 목록 + 선택한 분관 소개 (모바일) — Figma: Museum-List/Mobile (node 227:2713, 01 ~ 08)
 * MuseumListItem · MuseumText · ViewBtn 컴포넌트를 안에서 사용한다.
 *
 * Figma의 변형 8개(01~08)는 '몇 번째 분관이 선택됐는지'라서, 코드에서는 하나의 컴포넌트로
 * 목록을 누를 때마다 아래 사진·이름·주소가 바뀐다.
 *
 * - items: [{ number, name, title, address, image, href }, ...]  (없으면 Figma 시안의 분관 8개)
 *     name: 목록에 보이는 이름 / title·address: 아래 소개에 보이는 이름·주소
 *     href: '자세히 보기'를 눌렀을 때 이동할 주소 (없으면 버튼으로 동작)
 * - onViewClick(item): href가 없을 때 '자세히 보기'를 누르면 실행
 */
const defaultItems = [
  { number: '01', name: '서울시립미술관 서소문본관', title: '서소문본관', address: '서울특별시 중구 덕수궁길 61', image: museum01 },
  { number: '02', name: '서울시립 북서울미술관', title: '서울시립 북서울미술관', address: '서울특별시 노원구 동일로 1238', image: museum02 },
  { number: '03', name: '서울시립 서서울미술관', title: '서울시립 서서울미술관', address: '서울특별시 금천구 독산로 87', image: museum03 },
  { number: '04', name: '서울시립 미술아카이브', title: '서울시립 미술아카이브', address: '서울특별시 종로구 평창문화로 101', image: museum04 },
  { number: '05', name: '서울시립 사진미술관', title: '서울시립 사진미술관', address: '서울특별시 도봉구 마들로13길 68', image: museum05 },
  { number: '06', name: '서울시립 남서울미술관', title: '서울시립 남서울미술관', address: '서울특별시 관악구 남부순환로 2076', image: museum06 },
  { number: '07', name: '서울시립 난지미술창작스튜디오', title: '서울시립 난지미술창작스튜디오', address: '서울특별시 마포구 하늘공원로 108-1', image: museum07 },
  { number: '08', name: '서울시립 백남준을 기억하는 집', title: '서울시립 백남준을 기억하는 집', address: '서울특별시 종로구 종로53길 12-1', image: museum08 },
]

function MuseumListMobile({ items = defaultItems, onViewClick, className = '' }) {
  const [selected, setSelected] = useState(0)
  const panelId = useId()
  const item = items[selected]

  return (
    <div className={`museum-list-mobile ${className}`.trim()}>
      <ul className="museum-list-mobile__list" role="list">
        {items.map((museum, i) => (
          <li key={museum.number}>
            <MuseumListItem
              number={museum.number}
              name={museum.name}
              selected={i === selected}
              aria-controls={panelId}
              onClick={() => setSelected(i)}
            />
          </li>
        ))}
      </ul>

      {/* 선택한 분관 소개 — 바뀌면 스크린리더가 새 분관 이름·주소를 읽어줌 */}
      <div className="museum-list-mobile__panel" id={panelId} aria-live="polite">
        <div className="museum-list-mobile__image">
          <img src={item.image} alt="" />
        </div>
        <MuseumText title={item.title} address={item.address} />
        <ViewBtn href={item.href} onClick={item.href ? undefined : () => onViewClick?.(item)}>
          자세히 보기
        </ViewBtn>
      </div>
    </div>
  )
}

export default MuseumListMobile
