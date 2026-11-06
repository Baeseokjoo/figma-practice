import sampleImage from '../../assets/images/card-sample.jpg'
import './CardImage.css'

/**
 * 카드 이미지 — Figma: Card-Image (node 227:2837, Base / Hover)
 *
 * 마우스를 올리면(Hover) 이미지가 사방으로 살짝 커진다. 넘친 부분은 잘린다.
 * 링크(<a>) 안에 들어 있으면 링크에 마우스를 올리거나 키보드로 포커스해도 커진다.
 * - src: 이미지 주소 (기본값은 Figma 시안의 예시 포스터)
 * - alt: 이미지 설명 (카드 제목과 같은 내용이면 빈 값 '' 권장)
 * - zoom: false면 마우스를 올려도 커지지 않음 (상세 페이지처럼 확대가 필요 없을 때)
 */
function CardImage({ src = sampleImage, alt = '', zoom = true, className = '' }) {
  const classes = `card-image ${zoom ? '' : 'card-image--static'} ${className}`.replace(/\s+/g, ' ').trim()

  return (
    <div className={classes}>
      <img className="card-image__img" src={src} alt={alt} />
    </div>
  )
}

export default CardImage
