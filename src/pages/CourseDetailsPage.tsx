import { useParams } from "react-router";
import { Course } from "../models/course-interface";
import { useCourseStore } from "../store/courseStore";
import { useEffect, useState } from "react";
import Header from "../components/shared/Header";
import CourseDetailsCard from "../components/shared/CourseDetailsCard";

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
    <div className="flex flex-col gap-12 px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap justify-between py-12 items-center">
          <div className="flex max-w-1/2 flex-col gap-6 h-fit">
            <h3 className="text-primary text-xl">
              A Course You'll Actually Finish
            </h3>
            <h1 className="text-5xl font-semibold">{course.title}</h1>
            <h2 className="text-2xl">{course.description}</h2>
            <div className="flex gap-4">
              <button className="btn btn-primary rounded-4xl py-6 text-xl text-black">
                Enroll Now
              </button>
              <button className="btn btn-secondary rounded-4xl py-6 text-xl text-black">
                Preview Course
              </button>
            </div>
          </div>
          <div className="max-w-1/2">
            <CourseDetailsCard course={course}></CourseDetailsCard>
          </div>
        </div>
      </div>
    </div>
  );
}
