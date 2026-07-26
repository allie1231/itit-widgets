# 잇잇 위젯 배포 가이드

15분이면 노션에 임베드까지 완료돼요.

---

## 1단계 · GitHub 리포 만들기 (5분)

**GitHub 계정 없으시면**: github.com → Sign up

**계정 있으시면**:
1. github.com 로그인 → 우측 상단 `+` → `New repository`
2. Repository name: `itit-widgets`
3. Public 체크 (Private으로 하면 Vercel에서 별도 권한 필요)
4. `Create repository` 클릭

## 2단계 · 파일 업로드 (3분)

새로 만든 리포지토리 페이지에서:
1. `uploading an existing file` 링크 클릭
2. Finder에서 `itit-widgets` 폴더 안의 파일들을 **폴더째로** 드래그
   - `clock/` `progress/` `goals/` `palette/` `playlist/` `signature/` 폴더
   - `index.html`, `style.css`, `vercel.json`, `README.md` 파일
3. 아래로 스크롤 → `Commit changes` 클릭

**주의**: 폴더 구조가 유지되어야 해요. 파일만 따로 업로드하면 안 됩니다.

## 3단계 · Vercel 배포 (5분)

1. vercel.com → **Continue with GitHub**로 로그인
2. `Add New...` → `Project`
3. `itit-widgets` 리포지토리 선택 → `Import`
4. 설정 그대로 두고 `Deploy` 클릭
5. 1~2분 기다리면 배포 완료

배포되면 이런 URL이 생겨요:
```
https://itit-widgets.vercel.app
```
정확한 URL은 Vercel이 알려줍니다.

## 4단계 · 노션에 임베드 (2분)

노션에서 라이프 대시보드 페이지 열기:

1. 원하는 자리에 `/embed` 입력
2. `Embed a link` 선택
3. URL 붙여넣기:
   - 시계: `https://itit-widgets.vercel.app/clock`
   - 진행률: `https://itit-widgets.vercel.app/progress`
   - 목표: `https://itit-widgets.vercel.app/goals`
   - 팔레트: `https://itit-widgets.vercel.app/palette`
   - 플리: `https://itit-widgets.vercel.app/playlist`
   - 시그니처: `https://itit-widgets.vercel.app/signature`
4. `Embed link` 클릭 → 크기 드래그로 조절

---

## 위젯 편집하는 법

Goals와 Playlist는 편집 가능해요.

**목표 위젯**:
1. 위젯 위에 마우스 올림 → 오른쪽 위 `✎` 클릭
2. 세 줄 각각 클릭해서 편집
3. `저장` 클릭

**플리 위젯**:
1. `✎` 클릭 → 편집 패널 열림
2. `+ 플리 추가`로 새 항목 만들기
3. 이름 + 유튜브 URL 입력
4. `저장`

**지원하는 유튜브 URL 형식**:
- `youtu.be/xxxxx`
- `youtube.com/watch?v=xxxxx`
- `youtube.com/playlist?list=xxxxx`
- 이미 embed 형식도 OK

---

## 나중에 위젯 수정할 때

**색이나 레이아웃 바꾸고 싶으면**:
1. GitHub에서 해당 파일 클릭 → 연필 아이콘 → 편집
2. 저장하면 Vercel이 자동으로 재배포 (30초)
3. 노션 새로고침하면 반영됨

**커스텀 도메인** (선택):
- Vercel 프로젝트 → Settings → Domains → 재영님 도메인 연결 가능
- 없으면 vercel.app 그대로 OK

---

## 자주 묻는 것

**Q. 위젯이 노션에서 잘려요**
A. 노션에서 위젯 오른쪽 끝을 드래그해서 크기 조절. 각 위젯의 최적 크기는 index.html에 표기.

**Q. 편집 내용이 다른 컴퓨터에선 안 보여요**
A. 브라우저 localStorage에 저장되기 때문. 같은 브라우저를 계속 쓰시면 문제 없음.

**Q. 플리 유튜브가 자동재생 안 돼요**
A. 브라우저 정책이라 클릭해야 재생됨. 정상 동작.

**Q. 로컬에서 미리보기 할 수 있어요?**
A. 터미널에서 `cd itit-widgets && python3 -m http.server 8080` → http://localhost:8080 접속.
