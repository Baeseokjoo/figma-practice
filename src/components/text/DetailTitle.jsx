import './DetailTitle.css'

/**
 * 상세 페이지 제목 — Figma: 상세페이지Title (node 284:4328)
 *
 * - as: 제목 단계 태그 (기본 'h1' — 상세 페이지의 대표 제목). 페이지에 h1이 이미 있으면 'h2'로.
 */
function DetailTitle({ title = '타이틀', as: Tag = 'h1', className = '' }) {
  return <Tag className={`detail-title ${className}`.trim()}>{title}</Tag>
}

export default DetailTitle
