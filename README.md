# Carrot Market Reloaded

## 2.5 Project Setup

#### 프로젝트 초기화

```
$ npx create-next-app@latest
```

윈도우에서 에러 발생 시

`C:\Users\\[사용자이름]\AppData\Roaming\npm`

폴더를 생성해주면 된다

## 3.1 Intellisense

#### VSC 자동완성 첫 문자열부터 활성화하기 (빠른제안 활성화)

`settings.json` 파일 내 아래 설정 추가

```json
"editor.quickSuggestions": {
  "strings": true
}
```

#### 수동으로 제안 활성

윈도우 : `Ctrl + Space`

MAC : `Cmd + i`

## 3.5 Responsive Modifiers

Tailwind CSS 는 모바일 우선이다.

모바일 디자인을 먼저 구현하고 그 뒤에 화면을 키워간다.
