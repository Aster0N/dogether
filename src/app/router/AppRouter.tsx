import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import routes from "./routes"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<Navigate to={"/404"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
