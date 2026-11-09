import iconMoreBase from '../../assets/icons/icon-more-base.png'
import iconMoreClick from '../../assets/icons/icon-more-click.png'
import './MuseumListItem.css'

/**
 * 분관 목록 한 줄 — Figma: MuseumList (코드 이름 MuseumListItem — 세트 Museum-List와 구분) (node 227:2116, Base / Click)
 *
 * - href가 있으면 링크(<a>), 없으면 버튼(<button>)으로 그린다.
 * - selected=true면 Click 모양으로 고정된다 (현재 선택된 분관).
 *   누르고 있는 동안·마우스를 올렸을 때·키보드 포커스 때도 Click 모양이 된다.
 * - 화살표 아이콘은 장식이라 스크린리더가 읽지 않도록 alt="" 처리.
 */
function MuseumListItem({ number = '01', name = '서울시립미술관 서소문본관', href, selected = false, className = '', ...rest }) {
  const classes = `museum-list-item ${selected ? 'is-selected' : ''} ${className}`.replace(/\s+/g, ' ').trim()
  const content = (
    <>
      <span className="museum-list-item__name">
        <span>{number}</span>
        {/* 칸이 좁아 이름이 '…'로 줄면 마우스를 올렸을 때 전체 이름이 보이게 (title) */}
        <span className="museum-list-item__text" title={name}>
          {name}
        </span>
      </span>
      <span className="museum-list-item__icon">
        <img className="museum-list-item__icon-base" src={iconMoreBase} alt="" width="44" height="44" />
        <img className="museum-list-item__icon-click" src={iconMoreClick} alt="" width="44" height="44" />
      </span>
    </>
  )

  if (href) {
    return (
      <a className={classes} href={href} aria-current={selected ? 'true' : undefined} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} type="button" aria-pressed={selected} {...rest}>
      {content}
    </button>
  )
}

export default MuseumListItem
