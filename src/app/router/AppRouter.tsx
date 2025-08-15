import type { FC } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import type { AvailableRoutes } from "./routes"

interface AppRouterProps {
  routes: AvailableRoutes
}

const AppRouter: FC<AppRouterProps> = ({ routes }) => {
  return (
    <Routes>
      {routes.map(route => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<Navigate to={"/404"} />} />
    </Routes>
  )
}

export default AppRouter
