import ExhibitionInfoMobile from '../info/ExhibitionInfoMobile.jsx'
import ExhibitionInfoDesktop from '../info/ExhibitionInfoDesktop.jsx'

/**
 * 전시 정보 표 (반응형 세트) — Figma: Exhibition-Info 세트 (node 491:14167, Mobile / Desktop)
 *
 * 화면 1024px 미만은 ExhibitionInfoMobile(제목 가운데), 이상은 ExhibitionInfoDesktop(제목 왼쪽, 항목 칸 넓음)을 보여준다.
 * 받은 값(title, place, schedule, weekdayTitle, weekday, showFriday, friday, weekend, time, close)은
 * 두 컴포넌트에 똑같이 전달된다.
 */
function ExhibitionInfo({ className = '', ...props }) {
  return (
    <div className={`exhibition-info ${className}`.trim()}>
      <div className="show-mobile">
        <ExhibitionInfoMobile {...props} />
      </div>
      <div className="show-desktop">
        <ExhibitionInfoDesktop {...props} />
      </div>
    </div>
  )
}

export default ExhibitionInfo
