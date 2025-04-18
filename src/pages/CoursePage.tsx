import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import { useCourseStore } from "../store/courseStore";
import { Course } from "../models/course-interface";
import { Link } from "react-router";
import CourseCardSkeleton from "../components/CourseCardSkeleton";

export default function CoursePage() {
  const { allCourses, loadAllCourses, loading } = useCourseStore();
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);

  useEffect(() => {
    loadAllCourses(); // will skip internally if already loaded
  }, []);

  // ✅ Set filteredCourses when courses are loaded
  useEffect(() => {
    setFilteredCourses(allCourses);
  }, [allCourses]);

  // ✅ Filter logic
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    const filtered = allCourses.filter((course) =>
      course.title.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredCourses(filtered);
  };

  return (
    <main className="mx-auto flex max-w-7xl flex-col items-center gap-12 p-4 px-4">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-semibold">Build Real-World Skills</h1>
        <h2 className="text-2xl">
          From zero to job-ready with real-world challenges.
        </h2>
      </div>
      <input
        placeholder="Search..."
        onChange={handleSearch}
        className="input w-full max-w-md rounded-3xl border border-gray-300 px-4 py-2 focus:outline-none"
      />
      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <CourseCardSkeleton key={i} />
            ))
          : filteredCourses.map((course) => (
              <Link
                className="block h-full"
                to={`/courses/${course.slug}`}
                key={course.id}
              >
                <CourseCard course={course} />
              </Link>
            ))}
      </div>
    </main>
  );
}
