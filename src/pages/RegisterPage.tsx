export default function RegisterPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <form className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-semibold">Create Your Account</h1>
        <span className="text-gray-400">
          Welcome back! Please enter your details
        </span>
        <div className="flex w-full flex-col">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              placeholder="Enter your name"
              className="input w-full focus:outline-0"
            />
          </fieldset>

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

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Retype Password</legend>
            <input
              type="password"
              placeholder="Enter your password"
              className="input w-full focus:outline-0"
            />
          </fieldset>
        </div>
        <div className="flex w-full items-center gap-2 text-xs">
          <input type="checkbox" className="checkbox h-5 w-5 rounded-none" />I
          accept all terms & conditions
        </div>
        <button className="btn btn-neutral w-full shadow-none">Sign Up</button>
        <div className="text-xs">
          Already have an account? <b className="cursor-pointer">Sign in</b>
        </div>
      </form>
    </div>
  );
}
