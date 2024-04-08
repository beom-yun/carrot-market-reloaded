import FormInput from "../components/form-input";
import FormButton from "../components/form.btn";

export default function SMSLogin() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-semibold">
        <h1 className="text-2xl">SMS 로그인</h1>
        <h2 className="text-xl">핸드폰 인증을 해주세요!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          type="number"
          placeholder="핸드폰 번호"
          required
          errors={[]}
        />
        <FormInput type="number" placeholder="확인코드" required errors={[]} />
        <FormButton loading={false} text="인증하기" />
      </form>
    </div>
  );
}
