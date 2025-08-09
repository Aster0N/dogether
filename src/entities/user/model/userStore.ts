import { create } from "zustand"
import type { UserStore } from "../types"

export const useUserStore = create<UserStore>(set => ({
  user: null,
  isAuth: false,
  login: () =>
    set({
      user: {
        id: "1",
        email: "example@email.com",
      },
      isAuth: true,
    }),
  logout: () =>
    set({
      user: null,
      isAuth: false,
    }),
}))
