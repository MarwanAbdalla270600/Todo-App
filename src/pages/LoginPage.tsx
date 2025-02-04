export default function LoginPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <form className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-semibold">Login right here</h1>
        <span className="text-gray-400">
          Welcome back! Please enter your details
        </span>
        <div className="flex w-full flex-col">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              placeholder="Enter your email"
              className="input w-full focus:outline-0"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              placeholder="Enter your password"
              className="input w-full focus:outline-0"
            />
          </fieldset>
        </div>

        <button className="btn btn-neutral w-full shadow-none">Sign In</button>
      </form>
    </div>
  );
}
