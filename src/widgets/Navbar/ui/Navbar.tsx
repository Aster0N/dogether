import { routePath } from "@/app/router"
import { useAvailableRoutes } from "@/entities/user"
import { NavigationLink } from "@/shared"
import cl from "./Navbar.module.scss"

const Navbar = () => {
  const availableRoutes = useAvailableRoutes()

  if (!availableRoutes) {
    return <h2>Loading...</h2>
  }

  const leftSideLinks = availableRoutes.filter(
    route =>
      route.path !== routePath.NOT_FOUND &&
      route.path !== routePath.PROFILE &&
      route.path !== routePath.PROJECT,
  )
  const rightSideLinks = availableRoutes.filter(
    route => route.path === routePath.PROFILE,
  )

  return (
    <nav className={cl.nav}>
      <div className={cl.navLeft}>
        {leftSideLinks.map(route => (
          <NavigationLink route={route} key={route.path} />
        ))}
      </div>
      <div className={cl.navRight}>
        {rightSideLinks.map(route => (
          <NavigationLink route={route} key={route.path} />
        ))}
      </div>
    </nav>
  )
}

export default Navbar
