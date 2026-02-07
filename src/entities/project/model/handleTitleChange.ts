import type { ChangeEvent } from "react"
import type { Project } from "../types"

interface HandleTitleChange {
  (event: ChangeEvent<HTMLInputElement>, project: Project): Project
}

export const handleTitleChange: HandleTitleChange = (event, project) => {
  const updatedTitle = event.target.value
    ? event.target.value
    : `Project ${project.id.substring(0, 8)}`
  const updatedProject = {
    ...project,
    title: updatedTitle,
  }
  return updatedProject
}
