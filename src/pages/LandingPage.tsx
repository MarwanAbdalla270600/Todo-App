import { Link } from "react-router";
import BlackDummySlot from "../components/dummy/BlackDummySlot";
import PurpleDummySlot from "../components/dummy/PurpleDummySlot";
import PhoneDummySlot from "../components/dummy/PhoneDummySlot";
import Header from "../components/shared/Header";

export default function LandingPage() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col justify-between gap-12 px-4 py-12">
      <Header></Header>

      <main className="mx-auto flex max-w-4xl flex-col gap-8">
        <h1 className="text-center text-4xl font-semibold md:text-7xl">
          Unlock Your Potential Learn Without Limits
        </h1>
        <p className="mx-auto max-w-96 text-center text-xl">
          Learn new skills, improve your career, or dive into your passion
          projects
        </p>
      </main>

      <div className="flex w-full flex-col items-center justify-center gap-4 xl:flex-row xl:items-end">
        <BlackDummySlot />
        <div
          className="h-52 w-54 rounded-3xl bg-cover bg-center"
          style={{
            backgroundImage: "url(images/landing-page/men.jpg)",
          }}
        ></div>
        <div className="flex w-54 flex-col items-center justify-between rounded-3xl xl:h-80">
          <div className="bg-base-300 hidden w-40 flex-col items-center justify-center gap-1 rounded-xl p-2 xl:flex">
            <Link to="/register">
              <button className="btn btn-neutral w-34 rounded-lg shadow-none">
                Try it now
              </button>
            </Link>

            <span className="text-center text-sm">free for personal use</span>
          </div>
          <div className="bg-secondary flex w-54 justify-center rounded-3xl px-4 py-8">
            <p className="w-fit text-2xl font-semibold">
              Always know <br />
              what your <br />
              team is up to
            </p>
          </div>
        </div>
        <PurpleDummySlot />
        <PhoneDummySlot />
      </div>
    </div>
  );
}
