"use client";

import { useFormState } from "react-dom";
import FormInput from "../components/form-input";
import FormButton from "../components/form.btn";
import SocialLogin from "../components/social-login";
import { createAccount } from "./actions";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-semibold">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">아래 양식을 채워서 가입하세요!</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <FormInput name="username" type="text" placeholder="아이디" required />
        <FormInput name="email" type="email" placeholder="이메일" required />
        <FormInput
          name="password"
          type="password"
          placeholder="비밀번호"
          required
        />
        <FormInput
          name="confirm_password"
          type="password"
          placeholder="비밀번호 확인"
          required
        />
        <FormButton text="계정 만들기" />
      </form>
      <SocialLogin />
    </div>
  );
}
