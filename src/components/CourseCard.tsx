import { Course } from "../models/course-interface";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-base-200 flex h-full flex-col overflow-hidden rounded-xl shadow-md">
      <img
        src="images/course-fallback.jpg"
        loading="lazy"
        alt={course.title}
        className="h-60 w-full object-cover"
      />

      <div className="flex flex-1 flex-col justify-between p-4">
        {/* Tags */}
        <div className="mb-2 flex flex-wrap gap-2">
          {course.tags?.map((tag) => (
            <span
              key={tag}
              className="bg-base-300 rounded-md px-2 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title & Description */}
        <div className="flex-grow">
          <h2 className="text-lg font-semibold">{course.title}</h2>
          <p className="mt-1 line-clamp-3 text-sm text-gray-600">
            {course.description}
          </p>
        </div>

        {/* Footer Info */}
        <div className="mt-4">
          <p className="text-sm text-gray-500">By {course.instructor}</p>
          <div className="text-sm font-bold">
            {course.price === 0 ? "Free" : `${course.price} €`}
          </div>
        </div>
      </div>
    </div>
  );
}
