import { Link } from "react-router";

export default function LandingPage() {
  return (
    <main className="flex flex-col gap-8 p-4">
      <section className="flex items-center justify-between py-20">
        <div className="flex max-w-1/2 flex-col gap-8">
          <h1 className="text-7xl font-semibold">
            <span className="text-primary">Unlock</span> Your Potential<br></br>{" "}
            Learn Without Limits
          </h1>
          <p className="w-full text-xl">
            Learn new skills, improve your career, or dive into your passion
            projects
          </p>
          <div className="flex gap-4">
            <Link
              to="/register"
              className="btn btn-primary rounded-4xl py-6 text-xl text-black"
            >
              Sign up for free
            </Link>
            <Link
              to="/courses"
              className="btn btn-secondary rounded-4xl py-6 text-xl text-black"
            >
              Preview Courses
            </Link>
          </div>
        </div>
        <figure className="max-w-1/2">
          <img src="images/landing-page/hero.svg" />
        </figure>
      </section>

      <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 py-20">
        <p className="text-primary text-xl">Hello,</p>
        <h2 className="text-4xl font-semibold">I am Ahmed Adel</h2>
        <p className="text-base-content text-center text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          velit vitae magna fermentum ultrices. Sed nec nulla at nisl dapibus
          tincidunt. Vivamus non mauris eu erat consequat finibus. Curabitur
          placerat sapien a lectus sodales, sit amet congue magna laoreet. Nunc
          auctor, ligula sed accumsan aliquet, purus augue tincidunt sapien, nec
          semper elit arcu nec risus.
        </p>
        <video controls>
          <source src="videos/introduction.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </main>
  );
}
