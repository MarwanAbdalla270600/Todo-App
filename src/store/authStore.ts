import { create } from "zustand";
import {
  initAuthListener,
  loginUser,
  logoutUser,
  registerUser,
} from "../services/authService";

interface UserData {
  uid: string;
  displayName: string;
  email: string;
  createdAt?: Date;
}

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
      user: {
        uid: user.uid,
        displayName: user.displayName!,
        email: user.email!,
      },
    });
  },

  // ✅ Login User
  loginUser: async (email, password) => {
    const user = await loginUser(email, password);
    set({
      user: {
        uid: user.uid,
        displayName: user.displayName!,
        email: user.email!,
      },
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
