import { create } from "zustand"
import type { UserStore } from "../types"

export const useUserStore = create<UserStore>(set => ({
  user: {
    id: "1",
    email: "test@email.com",
  },
  isAuth: true,
  signin: (email, id) => {
    set({
      user: {
        id,
        email,
      },
      isAuth: true,
    })
  },
  signup: userData =>
    set({
      user: userData,
      isAuth: true,
    }),
  logout: async () =>
    set({
      user: null,
      isAuth: false,
    }),
}))
