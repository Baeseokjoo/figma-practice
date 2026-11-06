import { useId } from 'react'
import iconSubmenu from '../../assets/icons/icon-submenu.png'
import iconCalendar from '../../assets/icons/icon-calendar.png'
import './Form.css'

/**
 * 검색 조건 입력칸 — Figma: Foam (node 227:3812, Museum-Foam / Date-Foam)
 * Figma 레이어명 오타(Foam)는 코드에서 Form으로 정정
 *
 * variant='museum' (Museum-Form): 미술관 고르기 버튼
 *   - value: 선택된 미술관 이름 (없으면 '선택')
 *   - onOpen: 버튼을 눌렀을 때 실행 (목록 열기)
 *   - expanded: 목록이 열려 있는지 (스크린리더에 열림/닫힘 알림)
 *
 * variant='date' (Date-Form): 날짜 입력칸 + 달력 버튼
 *   - value / onChange: 입력한 날짜 글자와 바뀔 때 실행할 함수
 *   - onCalendarClick: 달력 버튼을 눌렀을 때 실행
 *   - calendarOpen: 달력이 열려 있는지
 *
 * label: 위쪽 제목 (기본값: 미술관 / 관람예정일)
 */
function Form({
  variant = 'museum',
  label,
  value,
  onOpen,
  expanded = false,
  onChange,
  onCalendarClick,
  calendarOpen = false,
  className = '',
}) {
  const id = useId()
  const labelId = `${id}-label`
  const valueId = `${id}-value`
  const isDate = variant === 'date'
  const title = label ?? (isDate ? '관람예정일' : '미술관')

  if (isDate) {
    return (
      <div className={`form form--date ${className}`.trim()}>
        <label className="form__label" htmlFor={`${id}-input`}>
          {title}
        </label>
        <div className="form__row">
          <div className="form__field">
            <input
              className="form__input"
              id={`${id}-input`}
              type="text"
              inputMode="numeric"
              placeholder="YYYY-MM-DD"
              value={value}
              onChange={onChange}
            />
            <img className="form__icon" src={iconSubmenu} alt="" width="24" height="24" />
          </div>
          <button
            className="form__calendar"
            type="button"
            aria-label={calendarOpen ? '달력 닫기' : '날짜 선택하기'}
            aria-expanded={calendarOpen}
            onClick={onCalendarClick}
          >
            <img src={iconCalendar} alt="" width="44" height="44" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`form form--museum ${className}`.trim()}>
      <p className="form__label" id={labelId}>
        {title}
      </p>
      <button
        className="form__field"
        type="button"
        aria-labelledby={`${labelId} ${valueId}`}
        aria-expanded={expanded}
        onClick={onOpen}
      >
        <span className="form__value" id={valueId}>
          {value || '선택'}
        </span>
        <img className="form__icon" src={iconSubmenu} alt="" width="24" height="24" />
      </button>
    </div>
  )
}

export default Form
