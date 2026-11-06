import './ExhibitionInfoMobile.css'

/**
 * 전시 정보 표 (모바일) — Figma: Exhibition-Info/Mobile (node 369:3389)
 *
 * 항목 이름(왼쪽)과 내용(오른쪽)을 짝지어 보여주는 목록이라 <dl>(설명 목록)로 만든다.
 * - showFriday: '매주 금요일' 줄 표시 여부 (Figma 불리언 속성)
 * - weekend, close: 줄바꿈(\n)을 넣으면 화면에서도 줄이 바뀐다.
 */
function ExhibitionInfoMobile({
  title = '《오윤》',
  place = '서울시립 미술아카이브',
  schedule = '2026.08.27 ~ 2027.02.14',
  weekdayTitle = '평일(화-금)',
  weekday = '오전 10시 - 오후 8시',
  showFriday = true,
  friday = '오전 10시 - 오후 9시 (연장운영)',
  weekend = '[3-10월] 오전 10시 - 오후 7시\n[11-2월] 오전 10시 - 오후 6시',
  time = '관람 종료 1시간 전까지 입장',
  close = '[1월 1일] [매주 월요일]\n월요일이 공휴일인 경우 정상 개관',
  className = '',
}) {
  const rows = [
    { label: '전시장소', value: place },
    { label: '전시기간', value: schedule },
    { label: weekdayTitle, value: weekday },
    showFriday && { label: '매주 금요일', value: friday },
    { label: '주말·공휴일', value: weekend },
    { label: '입장시간', value: time },
    { label: '휴관', value: close },
  ].filter(Boolean)

  return (
    <div className={`exhibition-info-mobile ${className}`.trim()}>
      <p className="exhibition-info-mobile__title">{title}</p>
      <dl className="exhibition-info-mobile__list">
        {rows.map((row) => (
          <div className="exhibition-info-mobile__row" key={row.label}>
            <dt className="exhibition-info-mobile__category">{row.label}</dt>
            <dd className="exhibition-info-mobile__text">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default ExhibitionInfoMobile
