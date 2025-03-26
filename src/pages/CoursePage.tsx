import { useEffect, useState } from "react";
import { getAllCourses } from "../services/courseService";
import Header from "../components/shared/Header";
import { Course } from "../models/course-interface";
import CourseCard from "../components/shared/CourseCard";

export default function CoursePage() {
  const [courses, setCourses] = useState<Course[]>([]); // 👈 initialize

  function loadCourses() {
    getAllCourses()
      .then((data) => {
        setCourses(data); // 👈 set the data
        console.log(data);
      })
      .catch((error) => {
        console.error("Failed to load courses:", error);
      });
  }

  useEffect(() => {
    loadCourses();
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
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>{" "}
    </div>
  );
}
