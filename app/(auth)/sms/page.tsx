"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import { useFormState } from "react-dom";
import { smsLogIn } from "./actions";

const initialState = { code: false, error: undefined };

export default function SMSLogIn() {
  const [state, dispatch] = useFormState(smsLogIn, initialState);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS 로그인</h1>
        <h2 className="text-xl">핸드폰을 이용해 로그인해주세요!</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        {state?.code ? (
          <FormInput
            key="code"
            type="number"
            name="verificationCode"
            placeholder="인증 코드"
            required
            min={100000}
            max={999999}
            errors={state.error?.formErrors}
          />
        ) : (
          <FormInput
            key="phoneNumber"
            type="text"
            name="phoneNumber"
            placeholder="핸드폰 번호"
            required
            errors={state.error?.formErrors}
          />
        )}
        <FormButton text={state.code ? "인증하기" : "인증번호 보내기"} />
      </form>
    </div>
  );
}
