import type { Project } from "../project"

export interface Task {
  id: string
  title: string
  description: string
  updatedAt: string
  createdAt: string
  done: boolean
  ownerId: string
  projectId: Project["id"]
  //groupId?: string
}

export interface TaskStore {
  taskList: {
    [id: Task["id"]]: Task
  }
  addNewTask: (
    projectId: Task["projectId"],
    //groupId?
    title: Task["title"],
    description?: Task["description"],
  ) => void
}
