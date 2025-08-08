import { Home, NotFound } from "@/pages"
import React from "react"
import type { RouteObject } from "react-router-dom"

const routes: RouteObject[] = [
  {
    path: "/",
    element: React.createElement(Home),
  },
  {
    path: "/404",
    element: React.createElement(NotFound),
  },
]

export default routes
