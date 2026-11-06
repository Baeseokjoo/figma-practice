import Month from '../calendar/Month.jsx'
import CalendarSource from '../calendar/CalendarSource.jsx'
import OperationSelector from '../calendar/OperationSelector.jsx'
import CalendarBtn from '../button/CalendarBtn.jsx'
import iconMonthNext from '../../assets/icons/icon-month-next.png'
import iconNextLg from '../../assets/icons/icon-next-lg.png'
import './Calendar.css'

/**
 * 날짜 선택 달력 (반응형 세트) — Figma: Calender 세트 (node 483:11844, Mobile / Desktop)
 * Figma 레이어명 오타(Calender)는 코드에서 Calendar로 정정
 * Month · OperationSelector · CalendarSource · CalendarBtn 컴포넌트를 안에서 사용한다.
 *
 * 구성: 연·월 + 다음 달 버튼 / 범례(운영 · 미운영 및 휴관 · 선택불가) / 요일 / 날짜 칸 / 선택 버튼
 *   - Mobile (1024px 미만): 날짜 칸 44px 정사각형, 버튼 '선택'
 *   - Desktop(1024px 이상): 날짜 칸이 넓은 직사각형(188:88), 범례 네모 32px, 버튼 '조회하기'
 *
 * - month: 연·월 글자 (예: '2026년 10월')
 * - days: 날짜 칸 배열 [{ key, day, status }, ...]  status: 'not' | 'open' | 'close'
 *     (없으면 Figma 시안의 2026년 10월)
 * - selected: 선택된 칸의 key / onSelect(dayItem): 날짜를 눌렀을 때 실행
 * - onNextMonth: 다음 달 버튼을 눌렀을 때 실행
 * - onSubmit: '선택'/'조회하기' 버튼을 눌렀을 때 실행
 *
 * 범례(OperationSelector)를 달력 바로 위에 함께 두어 테두리 색의 뜻을 알려준다.
 */
const weekdays = ['일', '월', '화', '수', '목', '금', '토']

// Figma 시안: 9/27 ~ 10/11 선택불가, 10/12 휴관, 10/13~ 운영·휴관
const closeDays = [12, 19, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
const defaultDays = [
  ...[27, 28, 29, 30].map((d) => ({ key: `9-${d}`, day: String(d), status: 'not' })),
  ...Array.from({ length: 31 }, (_, i) => {
    const d = i + 1
    let status = 'open'
    if (d <= 11) status = 'not'
    else if (closeDays.includes(d)) status = 'close'
    return { key: `10-${d}`, day: String(d), status }
  }),
]

const DESKTOP = '(min-width: 1024px)'

function Calendar({
  month = '2026년 10월',
  days = defaultDays,
  selected,
  onSelect,
  onNextMonth,
  onSubmit,
  className = '',
}) {
  return (
    <section className={`calendar ${className}`.trim()} aria-label={`${month} 달력`}>
      <div className="calendar__month">
        <Month text={month} />
        <button className="calendar__next" type="button" aria-label="다음 달" onClick={onNextMonth}>
          <picture>
            <source media={DESKTOP} srcSet={iconNextLg} width="65" height="65" />
            <img src={iconMonthNext} alt="" width="44" height="44" />
          </picture>
        </button>
      </div>

      <div className="calendar__legend">
        <OperationSelector type="open" text="운영" />
        <OperationSelector type="close" text="미운영 및 휴관" />
        <OperationSelector type="not" text="선택불가" />
      </div>

      <div className="calendar__grid">
        {weekdays.map((w) => (
          <CalendarSource key={w} day={w} status="date" className="calendar__weekday" />
        ))}
        {days.map((d) => (
          <CalendarSource
            key={d.key}
            day={d.day}
            status={d.status}
            selected={selected === d.key}
            onClick={() => onSelect?.(d)}
          />
        ))}
      </div>

      <div className="calendar__btn">
        <CalendarBtn
          onClick={onSubmit}
          text={
            <>
              <span className="show-mobile">선택</span>
              <span className="show-desktop">조회하기</span>
            </>
          }
        />
      </div>
    </section>
  )
}

export default Calendar
