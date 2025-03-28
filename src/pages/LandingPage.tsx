import { motion } from "framer-motion";

import { Link } from "react-router";

export default function LandingPage() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="flex flex-col gap-8">
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-7xl items-center justify-between py-20"
      >
        <div className="flex max-w-1/2 flex-col gap-8">
          {/* h1 zoom in */}
          <motion.h1 variants={zoomIn} className="text-7xl font-semibold">
            <span className="text-primary">Unlock</span> Your Potential
            <br />
            Learn Without Limits
          </motion.h1>

          {/* paragraph fades in */}
          <motion.p variants={fadeIn} className="w-full text-xl">
            Learn new skills, improve your career, or dive into your passion
            projects
          </motion.p>

          {/* buttons fade in */}
          <motion.div variants={fadeIn} className="flex gap-4">
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
          </motion.div>
        </div>

        {/* image zooms in */}
        <motion.figure variants={zoomIn} className="max-w-1/2">
          <img src="images/landing-page/hero.svg" />
        </motion.figure>
      </motion.section>

      <section className="bg-base-200 w-full py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
          <p className="text-primary text-xl">Hello,</p>
          <h2 className="text-4xl font-semibold">I am Ahmed Adel</h2>
          <p className="text-base-content text-center text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
            velit vitae magna fermentum ultrices. Sed nec nulla at nisl dapibus
            tincidunt. Vivamus non mauris eu erat consequat finibus. Curabitur
            placerat sapien a lectus sodales, sit amet congue magna laoreet.
            Nunc auctor, ligula sed accumsan aliquet, purus augue tincidunt
            sapien, nec semper elit arcu nec risus.
          </p>
          <video controls>
            <source src="videos/introduction.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </main>
  );
}
