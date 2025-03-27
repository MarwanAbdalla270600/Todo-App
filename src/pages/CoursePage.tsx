import { useEffect, useState } from "react";
import Header from "../components/shared/Header";
import CourseCard from "../components/shared/CourseCard";
import { useCourseStore } from "../store/courseStore";
import { Course } from "../models/course-interface";
import { Link } from "react-router";

export default function CoursePage() {
  const { allCourses, loadAllCourses } = useCourseStore();
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
    <div className="container mx-auto flex flex-col items-center gap-12 px-4 py-12">
      <Header></Header>
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-semibold">Build Real-World Skills</h1>
        <h2 className="text-2xl">
          From zero to job-ready with real-world challenges.
        </h2>
      </div>
      <input
        placeholder="Search..."
        onChange={handleSearch}
        className="input w-full max-w-md rounded border border-gray-300 px-4 py-2 focus:outline-none"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredCourses.map((course) => (
          <Link
            className="block h-full"
            to={`/courses/${course.slug}`}
            key={course.id}
          >
            <CourseCard key={course.id} course={course} />
          </Link>
        ))}
      </div>{" "}
    </div>
  );
}
