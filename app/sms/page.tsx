"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import { useFormState } from "react-dom";
import { smsLogIn } from "./actions";

export default function SMSLogIn() {
  const [state, dispatch] = useFormState(smsLogIn, null);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS 로그인</h1>
        <h2 className="text-xl">핸드폰을 이용해 로그인해주세요!</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <FormInput
          type="text"
          name="phoneNumber"
          placeholder="핸드폰 번호"
          required
          errors={state?.fieldErrors.phoneNumber}
        />
        <FormInput
          type="number"
          name="verificationCode"
          placeholder="인증 코드"
          required
          min={100000}
          max={999999}
          errors={state?.fieldErrors.verificationCode}
        />
        <FormButton text="인증하기" />
      </form>
    </div>
  );
}
