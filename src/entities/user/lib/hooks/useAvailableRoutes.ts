import { privateRoutes, publicRoutes, type AvailableRoutes } from "@/app/router"
import { useUserStore } from "../../model/userStore"

type UseAvailableRoutes = () => AvailableRoutes

export const useAvailableRoutes: UseAvailableRoutes = () => {
  const { user, isAuth } = useUserStore()

  if (user !== null && isAuth) {
    return privateRoutes
  }

  return publicRoutes
}
