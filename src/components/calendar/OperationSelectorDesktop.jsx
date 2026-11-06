import OperationSelector from './OperationSelector.jsx'
import './OperationSelectorDesktop.css'

/**
 * 달력 범례 한 칸 (데스크탑) — Figma: Operation Selector 데스크탑 (node 473:11189)
 * 모바일 OperationSelector와 같고 작은 네모만 크다 (16px → 32px).
 * 그래서 OperationSelector를 그대로 쓰고 크기만 바꾼다.
 *
 * 사용법은 OperationSelector와 같다: type('open' / 'close'), text
 */
function OperationSelectorDesktop({ className = '', ...props }) {
  return <OperationSelector {...props} className={`operation-selector-desktop ${className}`.trim()} />
}

export default OperationSelectorDesktop
