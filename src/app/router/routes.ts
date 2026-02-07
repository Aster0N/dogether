import { Auth, Home, NotFound, Profile, ProjectById, Projects } from "@/pages"
import React, { type ReactElement } from "react"

export type AvailableRoute = {
  path: (typeof routePath)[keyof typeof routePath]
  element: ReactElement
  placeholder: string
}

export type AvailableRoutes = AvailableRoute[]

export const routePath = {
  HOME: "/",
  NOT_FOUND: "/404",
  AUTH: "/auth",
  PROFILE: "/profile",
  PROJECTS: "/projects",
  PROJECT: "/projects/:projectId",
} as const

export const publicRoutes: AvailableRoutes = [
  {
    path: routePath.HOME,
    element: React.createElement(Home),
    placeholder: "home",
  },
  {
    path: routePath.NOT_FOUND,
    element: React.createElement(NotFound),
    placeholder: "not found",
  },
  {
    path: routePath.AUTH,
    element: React.createElement(Auth),
    placeholder: "auth",
  },
]

export const privateRoutes: AvailableRoutes = [
  {
    path: routePath.HOME,
    element: React.createElement(Home),
    placeholder: "home",
  },
  {
    path: routePath.NOT_FOUND,
    element: React.createElement(NotFound),
    placeholder: "not found",
  },
  {
    path: routePath.AUTH,
    element: React.createElement(Auth),
    placeholder: "auth",
  },
  {
    path: routePath.PROFILE,
    element: React.createElement(Profile),
    placeholder: "profile",
  },
  {
    path: routePath.PROJECTS,
    element: React.createElement(Projects),
    placeholder: "projects",
  },
  {
    path: routePath.PROJECT,
    element: React.createElement(ProjectById),
    placeholder: "project",
  },
]
