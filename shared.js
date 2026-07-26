// itit widgets · shared data helpers
// localStorage 키 규칙 통일 + 날짜 헬퍼

const ITIT = {
  // 오늘 날짜 (YYYY-MM-DD)
  today() {
    const d = new Date();
    const pad = n => String(n).padStart(2, '0');
    return d.getFullYear() + '-' + pad(d.getMonth()+1) + '-' + pad(d.getDate());
  },

  // 이번 주 월요일부터 일요일까지 7일 (YYYY-MM-DD 배열)
  thisWeek() {
    const d = new Date();
    const day = d.getDay(); // 0=일, 1=월
    const monday = new Date(d);
    monday.setDate(d.getDate() - (day === 0 ? 6 : day - 1));
    const days = [];
    for (let i = 0; i < 7; i++) {
      const t = new Date(monday);
      t.setDate(monday.getDate() + i);
      const pad = n => String(n).padStart(2, '0');
      days.push(t.getFullYear() + '-' + pad(t.getMonth()+1) + '-' + pad(t.getDate()));
    }
    return days;
  },

  // 짧은 형식 (M/D)
  short(dateStr) {
    const [y, m, d] = dateStr.split('-');
    return parseInt(m) + '/' + parseInt(d);
  },

  // 저장/로드
  save(key, value) {
    localStorage.setItem('itit.' + key, JSON.stringify(value));
  },
  load(key, fallback) {
    try {
      const v = JSON.parse(localStorage.getItem('itit.' + key));
      if (v !== null && v !== undefined) return v;
    } catch(e){}
    return fallback;
  },

  // 무드: 하루에 아침/밤 각각 저장
  // key: itit.mood.YYYY-MM-DD → { morning: 1-5, night: 1-5 }
  saveMood(date, when, level) {
    const rec = ITIT.load('mood.' + date, {});
    rec[when] = level;
    ITIT.save('mood.' + date, rec);
  },
  loadMood(date) {
    return ITIT.load('mood.' + date, {});
  },

  // 루틴: 하루 7개 완료 여부
  // key: itit.routine.YYYY-MM-DD → { '약 먹기': true, ... }
  saveRoutine(date, item, done) {
    const rec = ITIT.load('routine.' + date, {});
    if (done) rec[item] = true;
    else delete rec[item];
    ITIT.save('routine.' + date, rec);
  },
  loadRoutine(date) {
    return ITIT.load('routine.' + date, {});
  },

  // 회고: 하루 3칸
  // key: itit.reflection.YYYY-MM-DD → { good, bad, next }
  saveReflection(date, field, text) {
    const rec = ITIT.load('reflection.' + date, {});
    rec[field] = text;
    ITIT.save('reflection.' + date, rec);
  },
  loadReflection(date) {
    return ITIT.load('reflection.' + date, {});
  },

  // 무드 점수 이름 매핑
  MOOD_LABELS: ['', '저조', '무난', '좋음', '활력', '최고'],
  MOOD_COLORS: ['', '#B0C4D3', '#D8E9F4', '#DCE9DC', '#FDEFC9', '#FCE0E7'],

  // 루틴 항목 순서 고정
  ROUTINE_ITEMS: [
    '약 먹기',
    '유산균 먹기',
    '독서하기',
    '레퍼런스 분석',
    '일기쓰기',
    '롱블랙 읽기',
    '30분 이상 걷기',
  ],

  // 저장됨 힌트
  hint(el) {
    if (!el) return;
    el.classList.add('show');
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove('show'), 1000);
  },
};
