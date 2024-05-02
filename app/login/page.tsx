"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { login } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function LogIn() {
  const [state, dispatch] = useFormState(login, null);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">반갑습니다!</h1>
        <h2 className="text-xl">다시 오신걸 환영합니다!</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <FormInput
          type="email"
          name="email"
          placeholder="이메일"
          required
          errors={state?.fieldErrors.email}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="비밀번호"
          required
          minLength={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors.password}
        />
        <FormButton text="로그인" />
      </form>
      <SocialLogin />
    </div>
  );
}
