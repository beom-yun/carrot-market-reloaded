"use client";

import { useFormState } from "react-dom";
import FormInput from "../components/input";
import FormButton from "../components/button";
import SocialLogin from "../components/social-login";
import { login } from "./actions";
import { PASSWORD_MIN_LENGTH } from "../lib/constants";

export default function Login() {
  const [state, dispatch] = useFormState(login, null);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-semibold">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">다시 오신걸 환영합니다!</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder="이메일"
          required
          errors={state?.fieldErrors.email}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="비밀번호"
          required
          minLength={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors.password}
        />
        <FormButton text="로그인하기" />
      </form>
      <SocialLogin />
    </div>
  );
}
