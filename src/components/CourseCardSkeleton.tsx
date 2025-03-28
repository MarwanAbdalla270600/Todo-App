export default function CourseCardSkeleton() {
  return (
    <div className="bg-base-200 flex h-full flex-col overflow-hidden rounded-xl shadow-md">
      {/* Image Placeholder */}
      <div className="skeleton h-60 w-full" />

      <div className="flex flex-1 flex-col justify-between p-4">
        {/* Tags */}
        <div className="mb-2 flex flex-wrap gap-2">
          <div className="skeleton h-4 w-12 rounded" />
          <div className="skeleton h-4 w-16 rounded" />
        </div>

        {/* Title & Description */}
        <div className="flex-grow space-y-2">
          <div className="skeleton h-5 w-3/4 rounded" />
          <div className="skeleton h-4 w-full rounded" />
          <div className="skeleton h-4 w-5/6 rounded" />
          <div className="skeleton h-4 w-2/3 rounded" />
        </div>

        {/* Footer Info */}
        <div className="mt-4 space-y-2">
          <div className="skeleton h-4 w-1/2 rounded" />
          <div className="skeleton h-5 w-1/4 rounded" />
        </div>
      </div>
    </div>
  );
}
