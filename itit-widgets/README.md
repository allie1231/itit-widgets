# itit widgets

Studio Itjae의 노션 임베드용 위젯 6종.

## 위젯 목록

| 이름 | 크기 | URL | 설명 |
|---|---|---|---|
| Clock | 600×200 | `/clock` | 날짜·요일·시각 |
| Progress | 400×280 | `/progress` | 하루 진행률·남은 시간 |
| Goals | 400×280 | `/goals` | 이번 주 목표 3줄 (편집) |
| Palette | 400×280 | `/palette` | 오늘의 색 |
| Playlist | 600×200 | `/playlist` | 유튜브 플레이리스트 (편집) |
| Signature | 600×140 | `/signature` | 브랜드 시그니처 |

## 배포 (Vercel)

1. GitHub에 이 폴더 업로드
2. vercel.com에서 GitHub 리포 연결
3. 자동 배포됨

배포 후 URL 예시: `https://itit-widgets.vercel.app/clock`

## 노션에 임베드

노션 페이지에서 `/embed` 입력 → URL 붙여넣기.

각 위젯 URL을 개별로 임베드하시면 됩니다.
크기는 노션에서 드래그해서 조절.

## 편집 가능한 위젯

Goals와 Playlist는 마우스를 위젯 위에 올리면 오른쪽 상단에 ✎ 아이콘이 뜹니다.
편집 내용은 브라우저 localStorage에 저장됩니다.

**주의**: localStorage는 도메인·브라우저별로 저장되므로,
한 브라우저에서 편집한 내용은 다른 브라우저에서는 안 보입니다.

## 폴더 구조

```
itit-widgets/
├─ index.html          위젯 목록 페이지
├─ style.css           공통 스타일
├─ vercel.json         배포 설정
├─ clock/index.html
├─ progress/index.html
├─ goals/index.html
├─ palette/index.html
├─ playlist/index.html
└─ signature/index.html
```
