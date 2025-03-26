import { useEffect } from "react";
import Header from "../components/shared/Header";
import CourseCard from "../components/shared/CourseCard";
import { useCourseStore } from "../store/courseStore";

export default function CoursePage() {
  const { allCourses, loadAllCourses } = useCourseStore();

  useEffect(() => {
    loadAllCourses(); // ⬅️ Fetch once when this page loads
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-center gap-12 px-4 py-12">
      <Header></Header>
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-semibold">Build Real-World Skills</h1>
        <h2 className="text-2xl">
          From zero to job-ready with real-world challenges.
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>{" "}
    </div>
  );
}
