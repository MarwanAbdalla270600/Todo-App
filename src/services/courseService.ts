import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { Course } from "../models/course-interface";

// ✅ Fetch all courses
export async function getAllCourses() {
  try {
    const courseRef = collection(db, "courses");
    const snapshot = await getDocs(courseRef);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Course[];
  } catch (error) {
    console.error("Error fetching all courses:", error);
    throw error;
  }
}
