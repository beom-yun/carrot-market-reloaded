import FormInput from "../components/form-input";
import FormButton from "../components/form.btn";
import SocialLogin from "../components/social-login";

export default function Login() {
  const handleForm = async (formData: FormData) => {
    "use server";
    console.log("I run in the server");
    console.log(formData.get("email"), formData.get("password"));
  };

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-semibold">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">다시 오신걸 환영합니다!</h2>
      </div>
      <form action={handleForm} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder="이메일"
          required
          errors={[]}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="비밀번호"
          required
          errors={[]}
        />
        <FormButton loading={false} text="로그인하기" />
      </form>

      <SocialLogin />
    </div>
  );
}
