import { motion } from "framer-motion";

import { Link } from "react-router";
import FeatureCard from "../components/FeatureCard";
import { features } from "../data/feature-list";
import AnimatedOnScroll, {
  container,
  fadeIn,
  zoomIn,
} from "../components/AnimateOnScroll";

export default function LandingPage() {
  return (
    <main className="flex flex-col gap-8">
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-7xl flex-col items-center justify-between px-8 py-20 lg:flex-row"
      >
        <div className="flex flex-col gap-8 lg:max-w-1/2">
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
        <motion.figure variants={zoomIn} className="lg:max-w-1/2">
          <img src="images/landing-page/video.png" />
        </motion.figure>
      </motion.section>

      <section className="bg-base-200 w-full px-8 py-20">
        <AnimatedOnScroll variants={fadeIn}>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
            <p className="text-primary text-xl">Hello,</p>
            <h2 className="text-4xl font-semibold">I am Ahmed Adel</h2>
            <p className="text-base-content text-center text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vel velit vitae magna fermentum ultrices. Sed nec nulla at nisl
              dapibus tincidunt. Vivamus non mauris eu erat consequat finibus.
              Curabitur placerat sapien a lectus sodales, sit amet congue magna
              laoreet. Nunc auctor, ligula sed accumsan aliquet, purus augue
              tincidunt sapien, nec semper elit arcu nec risus.
            </p>
            <video controls>
              <source src="videos/introduction.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </AnimatedOnScroll>
      </section>

      <section className="px-8 py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-20">
          <div>
            <h3 className="text-primary text-center text-xl">
              Why You'll Love Learning Here
            </h3>
            <h2 className="text-center text-4xl font-semibold">
              Quality, Structure, and Real Results
            </h2>
          </div>

          {features.map((feature, index) => (
            <AnimatedOnScroll
              key={feature.title}
              variants={zoomIn}
              delay={index * 0.2}
            >
              <FeatureCard {...feature} />
            </AnimatedOnScroll>
          ))}
        </div>
      </section>
    </main>
  );
}
