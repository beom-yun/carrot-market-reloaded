"use client";

import Input from "../components/input";
import Button from "../components/button";
import { smsVerification } from "./actions";
import { useFormState } from "react-dom";

export default function SMSLogin() {
  const [state, dispatch] = useFormState(smsVerification, null);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-semibold">
        <h1 className="text-2xl">SMS 로그인</h1>
        <h2 className="text-xl">핸드폰 인증을 해주세요!</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <Input name="phone" type="number" placeholder="핸드폰 번호" required />
        <Input
          name="token"
          type="text"
          placeholder="확인코드"
          required
          min={100000}
          max={999999}
        />
        <Button text="인증하기" />
      </form>
    </div>
  );
}
