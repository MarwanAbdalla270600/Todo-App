import { Link } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuthStore from "../../store/authStore";
import InputField from "../../components/shared/InputField";
import Logo from "../../components/shared/Logo";

type FormFields = {
  name: string;
  email: string;
  password: string;
  retypePassword: string;
  checkbox: boolean;
};

export default function RegisterPage() {
  const registerAuth = useAuthStore((state) => state.registerUser);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    registerAuth(data.email, data.password, data.name);
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
        <h1 className="text-4xl font-semibold">Create Your Account</h1>
        <span className="text-gray-400">
          Welcome back! Please enter your details
        </span>

        <div className="flex w-full flex-col">
          <InputField
            {...register("name", { required: "Name is required" })}
            error={errors.name}
            label="Name"
            placeholder="Enter your name"
            type="text"
          />

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
            type="text"
          />

          <InputField
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 6 characters",
              },
            })}
            error={errors.password}
            label="Password"
            placeholder="Enter your password"
            type="password"
          />

          <InputField
            {...register("retypePassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            error={errors.retypePassword}
            label="Retype Password"
            placeholder="Retype your password"
            type="password"
          />
        </div>

        {/* ✅ Checkbox Validation */}
        <div className="flex w-full items-center gap-2 text-xs">
          <input
            {...register("checkbox", {
              required: "You must accept the terms & conditions",
            })}
            type="checkbox"
            className="checkbox h-5 w-5 rounded-none"
          />
          I accept all terms & conditions
        </div>
        {errors.checkbox && (
          <p className="w-full text-xs text-red-500">
            {errors.checkbox.message}
          </p>
        )}

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
