"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";

export default function LogIn() {
  const [state, dispatch] = useFormState(handleForm, null);

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
          errors={[]}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="비밀번호"
          required
          errors={state?.errors ?? []}
        />
        <FormButton text="로그인" />
      </form>
      <SocialLogin />
    </div>
  );
}
