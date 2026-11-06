import './SubMenu.css'

/**
 * 하위 메뉴 목록 — Figma: Sub-Menu (node 227:3049)
 *
 * Figma는 줄마다 켜기/끄기 속성(prop01~08)과 글자(text01~08)가 따로 있지만,
 * 코드에서는 items 배열 하나로 받는다. 보여줄 줄만 배열에 넣으면 된다.
 * - items: [{ label: '접근성 안내', href: '/accessibility' }, ...]  (href가 없으면 글자만)
 */
const defaultItems = [
  { label: '접근성 안내' },
  { label: '서소문 본관' },
  { label: '북서울미술관' },
  { label: '서서울미술관' },
  { label: '미술아카이브' },
  { label: '사진미술관' },
  { label: '난지미술창작스튜디오' },
  { label: '백남준을 기억하는 집' },
]

function SubMenu({ items = defaultItems, id, className = '' }) {
  return (
    <ul className={`sub-menu ${className}`.trim()} id={id} role="list">
      {items.map((item) => (
        <li key={item.label}>
          {item.href ? (
            <a className="sub-menu__link" href={item.href}>
              {item.label}
            </a>
          ) : (
            item.label
          )}
        </li>
      ))}
    </ul>
  )
}

export default SubMenu
