/**
 * 데스크탑 상단 메뉴(TopNavDesktop) — Figma: 3-4.완성본 › Desktop › TOP-NAV + NAV-Sub01 ~ 04
 * 데스크탑 시안은 둘째 메뉴 이름이 '전시·행사·문화'(모바일은 '전시·행사·교육')라 시안대로 따로 둔다.
 */
export const desktopMenus = [
  { text: '소개' },
  {
    text: '전시·행사·문화',
    items: [{ text: '전시' }, { text: '문화생활' }, { text: '교육이벤트' }, { text: '서울미디어시티비엔날레' }, { text: '서울사진축제' }],
  },
  { text: '전시해설', items: [{ text: '일정찾기', href: `${import.meta.env.BASE_URL}search` }] },
  {
    text: '소장품과 미술연구',
    items: [{ text: 'SeMA 소장품' }, { text: '미술아카이브' }, { text: "모두의 연구실 '코랄'" }, { text: 'SeMA 도서와 자료' }],
  },
  {
    text: '방문하기',
    items: [
      { text: '접근성 안내' },
      { text: '서소문본관' },
      { text: '북서울미술관' },
      { text: '서서울미술관' },
      { text: '미술아카이브' },
      { text: '사진미술관' },
      { text: '남서울미술관' },
      { text: '난지미술창작스튜디오' },
      { text: '백남준을 기억하는 집' },
    ],
  },
]

/**
 * 전체 메뉴(Nav)에 넣을 메뉴 목록 — Figma: NAV-01 ~ NAV-05
 * 이동할 화면이 있는 항목만 href를 넣는다. (지금은 '전시해설 > 일정찾기'만 화면이 있음)
 */
export const navMenus = [
  { text: '소개' },
  {
    text: '전시·행사·교육',
    items: [{ label: '전시' }, { label: '문화생활' }, { label: '교육이벤트' }, { label: '서울미디어시티비엔날레' }, { label: '서울사진축제' }],
  },
  { text: '전시해설', items: [{ label: '일정찾기', href: `${import.meta.env.BASE_URL}search` }] },
  {
    text: '소장품과 미술연구',
    items: [{ label: 'SeMA 소장품' }, { label: '미술아카이브' }, { label: "모두의 연구실 '코랄'" }, { label: 'SeMA 도서와 자료' }],
  },
  {
    text: '방문하기',
    items: [
      { label: '접근성 안내' },
      { label: '서소문 본관' },
      { label: '북서울미술관' },
      { label: '서서울미술관' },
      { label: '미술아카이브' },
      { label: '사진미술관' },
      { label: '난지미술창작스튜디오' },
      { label: '백남준을 기억하는 집' },
    ],
  },
]
