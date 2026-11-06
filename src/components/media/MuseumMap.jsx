import map01 from '../../assets/images/map-01.png'
import map02 from '../../assets/images/map-02.png'
import map03 from '../../assets/images/map-03.png'
import map04 from '../../assets/images/map-04.png'
import map05 from '../../assets/images/map-05.png'
import map06 from '../../assets/images/map-06.png'
import map07 from '../../assets/images/map-07.png'
import map08 from '../../assets/images/map-08.png'
import './MuseumMap.css'

/**
 * 서울 지도 (분관 위치 강조) — Figma: Map (node 468:3838, 01 ~ 08)
 * 'Map'은 JavaScript 기본 기능 이름과 겹쳐서 코드에서는 MuseumMap으로 사용
 *
 * - number: 분관 번호 '01' ~ '08' (Figma 변형 01~08 — 해당 분관의 구가 파란 선으로 강조된 지도)
 * - label: 지도 설명 (스크린리더용). 없으면 '서울 지도: ○○구 강조'
 */
const maps = {
  '01': { src: map01, district: '중구' },
  '02': { src: map02, district: '노원구' },
  '03': { src: map03, district: '금천구' },
  '04': { src: map04, district: '종로구' },
  '05': { src: map05, district: '도봉구' },
  '06': { src: map06, district: '관악구' },
  '07': { src: map07, district: '마포구' },
  '08': { src: map08, district: '종로구' },
}

function MuseumMap({ number = '01', label, className = '' }) {
  const map = maps[number] ?? maps['01']

  return (
    <div className={`museum-map ${className}`.trim()}>
      <img src={map.src} alt={label ?? `서울 지도: ${map.district} 강조`} width="551" height="488" />
    </div>
  )
}

export default MuseumMap
