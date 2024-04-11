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

## 6.1 Validation Errors

`[Object Schema]`

z.object() 로 오브젝트 스키마를 만들 수 있습니다.

```ts
const user = z.object({ username: z.string() });
```

`[.parse()]`

data의 타입이 유효한지 검사하기 위해 .parse() 메소드를 사용할 수 있습니다. 유효한 경우 데이터 전체 정보가 포함된 값이 반환됩니다. 유효하지 않은 경우, 에러가 발생합니다. 보통 try-catch 문으로 감싸서 사용한다고 합니다.

`[.safeParse()]`
.parse() 를 사용할 때 타입이 유효하지 않은 경우 Zod가 에러를 발생시키는 것을 원하지 않는다면, .safeParse() 를 사용하면 됩니다.
데이터가 유효한 경우 true값의 success와 데이터 정보가 담긴 data를 반환합니다.
유효하지 않은 경우에는 false값의 success와 에러 정보가 담긴 error를 반환합니다.

```ts
stringSchema.safeParse(12); // { success: false; error: ZodError }
```

## 6.7 Coerce

`Coerce`

Zod는 coerce를 이용하여 값의 타입을 강제할 수 있습니다.
모든 원시 타입이 지원되며, 아래와 같이 작동됩니다.

```ts
z.coerce.string(); // String(input)
z.coerce.number(); // Number(input)
z.coerce.boolean(); // Boolean(input)
z.coerce.bigint(); // BigInt(input)
z.coerce.date(); // new Date(input)
```

`Validator`

JavaScript의 validator 모듈은 문자열 검증 및 살균(sanitization)을 위한 라이브러리입니다. 이 라이브러리는 다양한 유형의 문자열 입력을 검증하거나 살균하는 데 사용할 수 있는 여러 함수를 제공합니다. 예를 들어, 이메일 주소가 유효한 형식인지, 문자열이 특정 형식(예: URL, 날짜)에 맞는지 확인할 수 있습니다. 또한, 입력으로부터 HTML 태그를 제거하는 등의 살균 작업도 수행할 수 있습니다.

```
$ npm i validator
$ npm i @types/validator
```
