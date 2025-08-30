import type { AvailableRoute } from "@/app/router"
import type { FC } from "react"
import { NavLink } from "react-router-dom"
import cl from './NavigationLink.module.scss'

interface NavigationLinkProps {
  route: AvailableRoute
  key?: string
}

const NavigationLink: FC<NavigationLinkProps> = ({ route }) => {
  return (
    <NavLink
      key={route.path}
      to={`${route.path}`}
      className={({ isActive }) => `${cl.navLink} ${isActive ? "_link-active" : ""}`}
    >
      {route.placeholder}
    </NavLink>
  )
}

export default NavigationLink
