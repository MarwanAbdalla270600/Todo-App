import { Course } from "../../models/course-interface";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-base-200 w-full max-w-sm cursor-pointer rounded-xl shadow-md">
      <img
        src="images/course-fallback.jpg"
        loading="lazy"
        alt={course.title}
        className="mb-4 max-h-48 w-full rounded-lg object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{course.title}</h2>
        <p className="mb-2 text-sm text-gray-600">{course.description}</p>
        <p className="text-sm text-gray-500">By {course.instructor}</p>
        <div className="mt-3 font-bold">
          {course.price === 0 ? "Free" : `${course.price} €`}
        </div>
      </div>
    </div>
  );
}
