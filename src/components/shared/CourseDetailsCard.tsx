import { Course } from "../../models/course-interface";
import { BsBarChartFill } from "react-icons/bs";
import { BiSolidVideo } from "react-icons/bi";
import { LuFileText } from "react-icons/lu";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaClosedCaptioning } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { ImInfinite } from "react-icons/im";
import { IoTime } from "react-icons/io5";

export default function CourseDetailsCard({ course }: { course: Course }) {
  return (
    <ul className="border-secondary flex flex-col gap-4 rounded-xl border-[1px] p-12 text-xl shadow-2xl">
      <li className="flex items-center gap-2">
        <BsBarChartFill />
        {course.level}
      </li>
      <li className="flex items-center gap-2">
        <BiSolidVideo />
        {course.duration} Hours
      </li>
      <li className="flex items-center gap-2">
        <LuFileText />
        {course.lessons} Lessons
      </li>
      <li className="flex items-center gap-2">
        <FaCloudDownloadAlt />
        Downloadable Content
      </li>
      <li className="flex items-center gap-2">
        <FaLaptopCode />
        Hands-on Exercises
      </li>
      <li className="flex items-center gap-2">
        <FaClosedCaptioning />
        Arabic Captions
      </li>
      <li className="flex items-center gap-2">
        <PiCertificateFill />
        Certificate of Completion
      </li>
      <li className="flex items-center gap-2">
        <ImInfinite />
        Lifetime Access
      </li>
      <li className="flex items-center gap-2">
        <IoTime />
        Learn at Your Own Pace
      </li>
    </ul>
  );
}
