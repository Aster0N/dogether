import type { Task } from "../task/types"

export interface Project {
  id: string
  title: string
  description: string
  updatedAt: string
  createdAt: string
  done: boolean
  ownerId: string
  taskIds: string[]
  taskGroupIds: string[]
}

export interface ProjectStore {
  projectList: {
    [id: Project["id"]]: Project
  }
  selectedProjectId: string | null
  taskGroupIds: string[]
  taskIds: string[]
  addNewProject: (
    title: Project["title"],
    description: Project["description"],
  ) => void
  removeProjectById: (id: Project["id"]) => void
  selectProject: (id: Project["id"]) => void
  deselectProject: () => void
  updateProjectData: (project: Project) => void
  getProjectById: (id: Project["id"]) => Project | undefined

  addNewTask: (
    projectId: Project["id"],
    taskId: Task["id"],
    //groupid
  ) => void
}
