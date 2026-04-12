export interface Task {
  id: string
  title: string
  description: string
  updatedAt: string
  createdAt: string
  done: boolean
  ownerId: string
  projectId: Project["id"]
}

export interface Project {
  id: string
  title: string
  description: string
  updatedAt: string
  createdAt: string
  done: boolean
  ownerId: string
  taskList: {
    [id: Task["id"]]: Task
  }
}

export interface ProjectStore {
  projectList: {
    [id: Project["id"]]: Project
  }
  selectedProjectId: string | null
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
    title: Task["title"],
    description?: Task["description"],
  ) => void
  getTaskById: (
    projectId: Project["id"],
    taskId: Task["id"],
  ) => Task | undefined
  updateTaskById: (
    projectId: Project["id"],
    taskId: Task["id"],
    taskDetails: Task,
  ) => void
}
