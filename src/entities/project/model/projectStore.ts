import { create } from "zustand"
import type { ProjectStore } from "../types"

const useProjectStore = create<ProjectStore>(set => ({
  projectList: {},
  addNewProject: (id, title, description) => {
    set(state => ({
      projectList: {
        ...state.projectList,
        [id]: {
          id,
          title,
          description,
          updatedAt: new Date().toISOString().slice(0, 10).replace(/-/g, "."),
          createdAt: new Date().toISOString().slice(0, 10).replace(/-/g, "."),
          done: false,
          ownerId: "smth",
        },
      },
    }))
  },
  removeProjectById: id => {
    set(state => {
      const { [id]: _, ...rest } = state.projectList
      return { projectList: rest }
    })
  },
}))
