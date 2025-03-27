import { create } from "zustand";
import { getAllCourses } from "../services/courseService";
import { Course } from "../models/course-interface";

interface CourseStore {
  allCourses: Course[];
  userCourses: Course[];
  allCoursesLoaded: boolean;
  loadAllCourses: () => Promise<void>;
  loadCourseBySlug: (slug: string) => Promise<Course | null>;
  //loadUserCourses: (uid: string) => Promise<void>;
}

export const useCourseStore = create<CourseStore>((set, get) => ({
  allCourses: [],
  userCourses: [],
  allCoursesLoaded: false,

  loadAllCourses: async () => {
    // Only load if not already loaded
    if (get().allCoursesLoaded) return;

    const data = await getAllCourses();
    set({ allCourses: data, allCoursesLoaded: true });
  },

  loadCourseBySlug: async (slug: string) => {
    // Load all courses if not already loaded
    if (!get().allCoursesLoaded) {
      await get().loadAllCourses();
    }

    const currentCourses = get().allCourses;
    console.log(currentCourses);
    console.log(slug);
    const course = currentCourses.find((c) => c.slug === slug);
    return course || null;
  },

  // loadUserCourses: async (uid: string) => {} // future expansion
}));
