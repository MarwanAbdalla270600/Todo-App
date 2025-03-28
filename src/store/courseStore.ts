import { create } from "zustand";
import { getAllCourses } from "../services/courseService";
import { Course } from "../models/course-interface";

interface CourseStore {
  allCourses: Course[];
  userCourses: Course[];
  allCoursesLoaded: boolean;
  loading: boolean;
  loadAllCourses: () => Promise<void>;
  loadCourseBySlug: (slug: string) => Promise<Course | null>;
  //loadUserCourses: (uid: string) => Promise<void>;
}

export const useCourseStore = create<CourseStore>((set, get) => ({
  allCourses: [],
  userCourses: [],
  allCoursesLoaded: false,
  loading: false,
  loadAllCourses: async () => {
    if (get().allCoursesLoaded) return;

    set({ loading: true });

    try {
      const data = await getAllCourses();
      set({
        allCourses: data,
        allCoursesLoaded: true,
        loading: false,
      });
    } catch (err) {
      console.error("Error loading courses", err);
      set({ loading: false });
    }
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
