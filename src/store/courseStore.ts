import { create } from "zustand";
import { getAllCourses } from "../services/courseService";
import { Course } from "../models/course-interface";

interface CourseStore {
  allCourses: Course[];
  userCourses: Course[];
  loadAllCourses: () => Promise<void>;
  loadUserCourses: (uid: string) => Promise<void>;
}

export const useCourseStore = create<CourseStore>((set) => ({
  allCourses: [],
  userCourses: [],

  loadAllCourses: async () => {
    const data = await getAllCourses();
    set({ allCourses: data });
  },

  loadUserCourses: async (uid: string) => {},
}));
