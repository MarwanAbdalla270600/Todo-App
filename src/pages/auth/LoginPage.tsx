import { Link } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuthStore from "../../store/authStore";
import InputField from "../../components/shared/InputField";
import Logo from "../../components/shared/Logo";

type FormFields = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const loginAuth = useAuthStore((state) => state.loginUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    loginAuth(data.email, data.password);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-4"
      >
        <Link to="/">
          <Logo />
        </Link>
        <h1 className="text-4xl font-semibold">Login right here</h1>
        <span className="text-gray-400">
          Welcome back! Please enter your details
        </span>

        <div className="flex w-full flex-col">
          <InputField
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
            error={errors.email}
            label="Email"
            placeholder="Enter your email"
            type="email"
          />

          <InputField
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            error={errors.password}
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
        </div>

        <button type="submit" className="btn btn-neutral w-full shadow-none">
          Sign In
        </button>

        <div className="text-xs">
          Don't have an account?
          <Link to="/register">
            <b className="mx-2 cursor-pointer">Sign up</b>
          </Link>
        </div>
      </form>
    </div>
  );
}
