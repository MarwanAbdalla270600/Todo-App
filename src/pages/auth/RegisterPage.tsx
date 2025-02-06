import { FormEvent, useRef } from "react";
import useAuthStore from "../../store/authStore";
import InputField from "../../components/shared/InputField";
import { Link } from "react-router";
import Logo from "../../components/shared/Logo";

export default function RegisterPage() {
  const registerAuth = useAuthStore((state) => state.registerUser);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const retypePasswordRef = useRef<HTMLInputElement>(null);

  function register(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    registerAuth(
      emailRef.current?.value!,
      passwordRef.current?.value!,
      nameRef.current?.value!,
    );
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <form onSubmit={register} className="flex flex-col items-center gap-4">
        <Link to="/">
          <Logo />
        </Link>
        <h1 className="text-4xl font-semibold">Create Your Account</h1>
        <span className="text-gray-400">
          Welcome back! Please enter your details
        </span>
        <div className="flex w-full flex-col">
          <InputField
            ref={nameRef}
            label="Name"
            placeholder="Enter your name"
            type="text"
          ></InputField>

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

          <InputField
            ref={retypePasswordRef}
            label="Retype Password"
            placeholder="Retype your password"
            type="password"
          ></InputField>
        </div>
        <div className="flex w-full items-center gap-2 text-xs">
          <input type="checkbox" className="checkbox h-5 w-5 rounded-none" />I
          accept all terms & conditions
        </div>
        <button type="submit" className="btn btn-neutral w-full shadow-none">
          Sign Up
        </button>
        <div className="text-xs">
          Already have an account?
          <Link to="/login">
            <b className="mx-2 cursor-pointer">Sign in</b>
          </Link>
        </div>
      </form>
    </div>
  );
}
