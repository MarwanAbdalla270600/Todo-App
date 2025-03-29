import { useParams } from "react-router";
import { Course } from "../models/course-interface";
import { useCourseStore } from "../store/courseStore";
import { useEffect, useState } from "react";
import CourseDetailsCard from "../components/CourseDetailsCard";

export default function CourseDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const { loadCourseBySlug } = useCourseStore();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    if (slug) {
      loadCourseBySlug(slug).then((result) => {
        setCourse(result);
        console.log(result);
      });
    }
  }, [slug, loadCourseBySlug]);

  if (!course) return <div>Loading course...</div>;

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <div className="flex flex-col items-center justify-between gap-8 py-12 lg:flex-row">
        <div className="flex h-fit w-full flex-col items-center gap-6 text-center md:items-start md:text-start lg:max-w-1/2">
          <h3 className="text-primary text-sm sm:text-xl">
            A Course You'll Actually Finish
          </h3>
          <h1 className="text-4xl font-semibold sm:text-5xl">{course.title}</h1>
          <h2 className="text-xl md:text-2xl">{course.description}</h2>
          <div className="flex gap-4">
            <button className="btn btn-primary rounded-4xl py-6 text-xl text-black">
              Enroll Now
            </button>
            <button className="btn btn-secondary rounded-4xl py-6 text-xl text-black">
              Preview Course
            </button>
          </div>
        </div>
        <div className="w-full lg:w-fit lg:max-w-1/2">
          <CourseDetailsCard course={course}></CourseDetailsCard>
        </div>
      </div>
    </main>
  );
}
