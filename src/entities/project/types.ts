export interface Project {
  id: string
  title: string
  description: string
  updatedAt: string
  createdAt: string
  done: boolean
  ownerId: string
}

export interface ProjectStore {
  projectList: {
    [id: Project["id"]]: Project
  }
  selectedProjectId: string | null
  addNewProject: (
    title: Project["title"],
    description: Project["description"]
  ) => void
  removeProjectById: (id: Project["id"]) => void
  selectProject: (id: Project["id"]) => void
  deselectProject: () => void
}
