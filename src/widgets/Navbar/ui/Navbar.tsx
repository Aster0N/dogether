import { routePath } from "@/app/router"
import { useAvailableRoutes } from "@/entities/user"
import { NavLink } from "react-router-dom"
import cl from "./Navbar.module.scss"

const Navbar = () => {
  const availableRoutes = useAvailableRoutes()

  return (
    <nav className={cl.nav}>
      {availableRoutes &&
        availableRoutes.map(
          route =>
            route.path !== routePath.NOT_FOUND && (
              <NavLink
                key={route.path}
                to={`${route.path}`}
                className={({ isActive }) =>
                  `"_btn-large" ${isActive ? "_link-active" : ""}`
                }
              >
                {route.placeholder}
              </NavLink>
            )
        )}
    </nav>
  )
}

export default Navbar
