export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col justify-between gap-4 px-4 py-12">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="flex w-48 items-center gap-2">
          <div className="grid h-10 w-10 grid-cols-2 gap-1">
            <div className="rounded-full bg-gray-200" />
            <div className="rounded-full bg-gray-900" />
            <div className="rounded-full bg-gray-900" />
            <div className="rounded-full bg-gray-900" />
          </div>
          <h2 className="text-2xl">agenda</h2>
        </div>

        <div className="hidden gap-8 md:flex">
          <a>How we work</a>
          <a>Pricing</a>
          <a>FAQ</a>
          <a>Resources</a>
        </div>

        <div className="flex w-48 justify-end gap-4">
          <button className="btn btn-ghost rounded-lg">Log In</button>
          <button className="btn btn-outline rounded-lg">Sign Up</button>
        </div>
      </header>

      <main className="mx-auto flex max-w-4xl flex-col gap-8">
        <h1 className="text-center text-6xl font-semibold md:text-8xl">
          your calendar as a service
        </h1>
        <p className="mx-auto max-w-96 text-center text-xl">
          The joyful productivity app, Schedule time for todos, events and
          contacts
        </p>
      </main>

      <div className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row lg:items-end">
        <div className="bg-neutral h-80 w-54 rounded-3xl"></div>
        <div
          className="h-52 w-54 rounded-3xl bg-cover bg-center"
          style={{
            backgroundImage: "url(images/landing-page/men.jpg)",
          }}
        ></div>
        <div className="flex h-80 w-54 flex-col items-center justify-between rounded-3xl">
          <div className="bg-base-300 flex w-40 flex-col items-center justify-center gap-1 rounded-xl p-2">
            <button className="btn btn-neutral w-34 rounded-lg shadow-none">
              Try it now
            </button>
            <span className="text-center text-sm">free for personal use</span>
          </div>
          <div className="flex w-54 justify-center rounded-3xl bg-teal-100 px-4 py-8">
            <p className="w-fit text-2xl font-semibold">
              Always know <br />
              what your <br />
              team is up to
            </p>
          </div>
        </div>
        <div className="h-52 w-54 rounded-3xl bg-purple-300"></div>
        <div
          className="bg-base-300 h-80 w-54 rounded-3xl bg-cover bg-center"
          style={{
            backgroundImage: "url(images/landing-page/study.jpg)",
          }}
        ></div>
      </div>
    </div>
  );
}
