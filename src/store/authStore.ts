import { create } from "zustand";
import {
  initAuthListener,
  loginUser,
  logoutUser,
  registerUser,
} from "../services/authService";
import { UserData } from "../models/userData-interface";

interface AuthState {
  user: UserData | null;
  loading: boolean;
  registerUser: (
    email: string,
    password: string,
    name: string,
  ) => Promise<void>;
  loginUser: (email: string, password: string) => Promise<void>;
  logoutUser: () => Promise<void>;
  initAuth: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,

  // ✅ Register User and Store Name in Firestore
  registerUser: async (email, password, name) => {
    const user = await registerUser(email, password, name);
    set({
      user: user,
    });
  },

  // ✅ Login User
  loginUser: async (email, password) => {
    const user = await loginUser(email, password);
    console.log(user);
    set({
      user: user,
    });
  },

  // ✅ Logout User
  logoutUser: async () => {
    await logoutUser();
    set({ user: null });
  },

  // ✅ Fetch Current User on Auth State Change
  initAuth: () => {
    initAuthListener((user) => {
      set({ user, loading: false });
    });
  },
}));

export default useAuthStore;
