import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import { auth, db } from "../config/firebase";
import { UserData } from "../models/userData-interface";

export async function registerUser(
  email: string,
  password: string,
  name: string,
) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    await updateProfile(user, { displayName: name });

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      displayName: name,
      email: email,
      createdAt: new Date(),
    });
    return user as UserData;
  } catch (error) {
    console.error("Registration Error:", error);
    throw error;
  }
}

export async function loginUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    return userCredential.user as UserData;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
}

export async function logoutUser() {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Logout Error:", error);
  }
}

export async function getUserData(uid: string): Promise<UserData | null> {
  try {
    const userDoc = await getDoc(doc(db, "users", uid));
    return userDoc.exists() ? (userDoc.data() as UserData) : null;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}

export function initAuthListener(callback: (user: UserData | null) => void) {
  onAuthStateChanged(auth, async (firebaseUser: User | null) => {
    if (firebaseUser) {
      const userData = await getUserData(firebaseUser.uid);
      callback(userData);
    } else {
      callback(null);
    }
  });
}
