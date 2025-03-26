import { Course } from "../../models/course-interface";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-base-200 flex w-full max-w-sm cursor-pointer flex-col rounded-xl shadow-md">
      <img
        src="images/course-fallback.jpg"
        loading="lazy"
        alt={course.title}
        className="mb-4 max-h-48 w-full rounded-lg object-cover"
      />
      <div className="flex h-fit flex-1 flex-col justify-between p-4 gap-2">
        <div>
          <h2 className="text-xl font-semibold">{course.title}</h2>
          <p className="mb-2 text-sm text-gray-600">{course.description}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">By {course.instructor}</p>
          <div className="font-bold">
            {course.price === 0 ? "Free" : `${course.price} €`}
          </div>
        </div>
      </div>
    </div>
  );
}
