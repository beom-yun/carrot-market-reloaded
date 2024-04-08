import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FormInput from "../components/form-input";
import FormButton from "../components/form.btn";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-semibold">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">아래 양식을 채워서 가입하세요!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput type="text" placeholder="아이디" required errors={[]} />
        <FormInput type="email" placeholder="이메일" required errors={[]} />
        <FormInput
          type="password"
          placeholder="비밀번호"
          required
          errors={[]}
        />
        <FormInput
          type="password"
          placeholder="비밀번호 확인"
          required
          errors={[]}
        />
        <FormButton loading={false} text="계정 만들기" />
      </form>
      <div className="h-px w-full bg-neutral-500" />
      <div>
        <Link
          href="/sms"
          className="primary-btn flex h-10 items-center justify-center gap-2"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
          </span>
          <span>SMS로 가입하기</span>
        </Link>
      </div>
    </div>
  );
}
