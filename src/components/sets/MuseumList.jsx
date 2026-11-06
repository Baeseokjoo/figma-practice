import { useId, useState } from 'react'
import MuseumListItem from '../list/MuseumListItem.jsx'
import MuseumText from '../text/MuseumText.jsx'
import ViewBtn from '../button/ViewBtn.jsx'
import MuseumMap from '../media/MuseumMap.jsx'
import museum01 from '../../assets/images/museum-01.jpg'
import museum02 from '../../assets/images/museum-02.jpg'
import museum03 from '../../assets/images/museum-03.jpg'
import museum04 from '../../assets/images/museum-04.jpg'
import museum05 from '../../assets/images/museum-05.jpg'
import museum06 from '../../assets/images/museum-06.jpg'
import museum07 from '../../assets/images/museum-07.jpg'
import museum08 from '../../assets/images/museum-08.jpg'
import './MuseumList.css'

/**
 * 분관 목록 + 지도 + 선택한 분관 소개 (반응형) — Figma: Museum-List 세트 (node 468:4759, Mobile / Desktop)
 * MuseumListItem · MuseumMap · MuseumText · ViewBtn 컴포넌트를 안에서 사용한다.
 *
 * 목록에서 분관을 누르면 사진·이름·주소(데스크탑은 지도도)가 그 분관으로 바뀐다.
 *   - Mobile (1024px 미만): 목록 → 사진 → 이름·주소 → 자세히 보기 (세로로 쌓임, 지도 없음)
 *   - Desktop(1024px 이상): 목록 | 서울 지도 | 사진·이름·주소·자세히 보기 (가로 3칸)
 *
 * - items: [{ number, name, title, address, district, image, href }, ...]
 *     (없으면 Figma 시안의 분관 8개)
 *     district: 지도 설명에 쓰는 구 이름 (지도 그림은 number로 MuseumMap이 고름)
 * - onViewClick(item): href가 없을 때 '자세히 보기'를 누르면 실행
 */
const defaultItems = [
  { number: '01', name: '서울시립미술관 서소문본관', title: '서소문본관', address: '서울특별시 중구 덕수궁길 61', district: '중구', image: museum01 },
  { number: '02', name: '서울시립 북서울미술관', title: '서울시립 북서울미술관', address: '서울특별시 노원구 동일로 1238', district: '노원구', image: museum02 },
  { number: '03', name: '서울시립 서서울미술관', title: '서울시립 서서울미술관', address: '서울특별시 금천구 독산로 87', district: '금천구', image: museum03 },
  { number: '04', name: '서울시립 미술아카이브', title: '서울시립 미술아카이브', address: '서울특별시 종로구 평창문화로 101', district: '종로구', image: museum04 },
  { number: '05', name: '서울시립 사진미술관', title: '서울시립 사진미술관', address: '서울특별시 도봉구 마들로13길 68', district: '도봉구', image: museum05 },
  { number: '06', name: '서울시립 남서울미술관', title: '서울시립 남서울미술관', address: '서울특별시 관악구 남부순환로 2076', district: '관악구', image: museum06 },
  { number: '07', name: '서울시립 난지미술창작스튜디오', title: '서울시립 난지미술창작스튜디오', address: '서울특별시 마포구 하늘공원로 108-1', district: '마포구', image: museum07 },
  { number: '08', name: '서울시립 백남준을 기억하는 집', title: '서울시립 백남준을 기억하는 집', address: '서울특별시 종로구 종로53길 12-1', district: '종로구', image: museum08 },
]

function MuseumList({ items = defaultItems, onViewClick, className = '' }) {
  const [selected, setSelected] = useState(0)
  const panelId = useId()
  const item = items[selected]

  return (
    <div className={`museum-list ${className}`.trim()}>
      <ul className="museum-list__list" role="list">
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

      {/* 서울 지도 — 데스크탑에서만 보임 */}
      <MuseumMap
        className="museum-list__map"
        number={item.number}
        label={`서울 지도: ${item.title} 위치 (${item.district})`}
      />

      {/* 선택한 분관 소개 — 바뀌면 스크린리더가 새 분관 이름·주소를 읽어줌 */}
      <div className="museum-list__place" id={panelId} aria-live="polite">
        <div className="museum-list__image">
          <img src={item.image} alt="" />
        </div>
        <div className="museum-list__info">
          <MuseumText title={item.title} address={item.address} />
          <ViewBtn href={item.href} onClick={item.href ? undefined : () => onViewClick?.(item)}>
            자세히 보기
          </ViewBtn>
        </div>
      </div>
    </div>
  )
}

export default MuseumList
