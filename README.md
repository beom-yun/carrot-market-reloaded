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

Tailwind CSS 내 prettier로 className 정렬방법

`.prettierrc` 파일 내 아래 내용 추가

```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

## 3.12 Plugins

`tailwindcss/forms` 유틸리티를 사용하여 form 요소를 쉽게 재정의할 수 있도록 form 스타일에 대한 기본적인 reset을 제공하는 플러그인

```
$ npm i -D @tailwindcss/forms
```

설치 이후 `tailwind.config.ts` 내 플러그인 설치

```ts
plugins: [require("@tailwindcss/forms")],
```

`daisyUI` Tailwind CSS용 가장 인기있는 컴포넌트 라이브러리

```
$ npm i -D daysyui@latest
```

## 4.1 Create Account Screen

`heroicons` 설치

```
$ npm i @heroicons/react
```

## 5.2 useFormStatus

`useFormStatus`

useFormStatus는 마지막 form submit의 상태 정보를 제공하는 Hook입니다.

```ts
const { pending, data, method, action } = useFormStatus();
```

https://react.dev/reference/react-dom/hooks/useFormStatus

## 5.3 useFormState

`useFormState`

useFormState는 form action의 결과에 따라 상태를 업데이트할 수 있는 Hook입니다.

```ts
const [state, formAction] = useFormState(fn, initialState, permalink?);
```

https://react.dev/reference/react-dom/hooks/useFormState

## 6.0 Introduction to Zod

`Zod`

정적 타입 추론을 통한 TypeScript 스키마 검증

```
$ npm i zod
```

https://zod.dev

타입스크립트는 작성된 코드의 컴파일 시점에만 타입 검사를 하며, 이것은 오직 개발자를 위한 것입니다.
컴파일을 한 후 자바스크립트 런타임 환경에서는 타입스크립트가 아무런 힘을 쓰지 못합니다.
따라서 zod 와 같은 라이브러리의 도움을 받아서 예측 불가능한 런타임 환경에서도 타입 검사(유효성 검증)을 가능하게 합니다.

https://www.daleseo.com/zod-why-validation/
