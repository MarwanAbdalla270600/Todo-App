import { FormEvent, useRef } from "react";
import InputField from "../components/InputField";
import useAuthStore from "../store/authStore";

export default function LoginPage() {
  const loginAuth = useAuthStore((state) => state.loginUser);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    loginAuth(emailRef.current?.value!, passwordRef.current?.value!);
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <form onSubmit={login} className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-semibold">Login right here</h1>
        <span className="text-gray-400">
          Welcome back! Please enter your details
        </span>
        <div className="flex w-full flex-col">
          <InputField
            ref={emailRef}
            label="Email"
            placeholder="Enter your email"
            type="email"
          ></InputField>

          <InputField
            ref={passwordRef}
            label="Password"
            placeholder="Enter your password"
            type="password"
          ></InputField>
        </div>

        <button type="submit" className="btn btn-neutral w-full shadow-none">
          Sign In
        </button>
      </form>
    </div>
  );
}
