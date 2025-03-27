export default function LandingPage() {
  return (
    <main className="flex flex-col gap-8 p-4">
      <section className="flex items-center justify-between pt-20">
        <div className="flex max-w-1/2 flex-col gap-8">
          <h1 className=" font-semibold text-7xl">
            <span className="text-primary">Unlock</span> Your Potential<br></br>{" "}
            Learn Without Limits
          </h1>
          <p className="w-full text-xl">
            Learn new skills, improve your career, or dive into your passion
            projects
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary rounded-4xl py-6 text-xl text-black">
              Sign up for free
            </button>
            <button className="btn btn-secondary rounded-4xl py-6 text-xl text-black">
              Preview Courses
            </button>
          </div>
        </div>
        <figure className="max-w-1/2">
          <img src="images/landing-page/hero.svg" />
        </figure>
      </section>
    </main>
  );
}
