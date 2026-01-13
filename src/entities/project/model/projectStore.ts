import { create } from "zustand"
import type { ProjectStore } from "../types"

export const useProjectStore = create<ProjectStore>(set => ({
  projectList: {},
  selectedProjectId: null,
  addNewProject: (title, description) => {
    const newId = crypto.randomUUID()
    const newProject = {
      id: newId,
      title,
      description,
      updatedAt: new Date().toISOString().slice(0, 10).replace(/-/g, "."),
      createdAt: new Date().toISOString().slice(0, 10).replace(/-/g, "."),
      done: false,
      ownerId: "smth",
    }
    set(state => ({
      projectList: {
        ...state.projectList,
        [newId]: newProject,
      },
      selectedProjectId: newId,
    }))
  },
  removeProjectById: id => {
    set(state => {
      const { [id]: _, ...rest } = state.projectList
      return { projectList: rest }
    })
  },
  selectProject: id => {
    set({ selectedProjectId: id })
  },
  deselectProject: () => {
    set({ selectedProjectId: null })
  },
}))
