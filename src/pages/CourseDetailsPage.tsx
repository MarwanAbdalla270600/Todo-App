import { useParams } from "react-router";
import { Course } from "../models/course-interface";
import { useCourseStore } from "../store/courseStore";
import { useEffect, useState } from "react";
import Header from "../components/shared/Header";

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
    <div className="container mx-auto flex flex-col gap-12 px-4 py-12">
      <Header></Header>
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="text-lg text-gray-600">{course.subtitle}</p>
      <p className="mt-4">{course.description}</p>
      <div className="mt-6">
        <p>
          <strong>Instructor:</strong> {course.instructor}
        </p>
        <p>
          <strong>Level:</strong> {course.level}
        </p>
        <p>
          <strong>Price:</strong> €{course.price}
        </p>
        <p>
          <strong>Duration:</strong> {course.duration} hours
        </p>
        <p>
          <strong>Lessons:</strong> {course.lessons}
        </p>
      </div>
    </div>
  );
}
