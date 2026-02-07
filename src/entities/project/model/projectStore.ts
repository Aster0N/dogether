import { create } from "zustand"
import type { ProjectStore } from "../types"

export const useProjectStore = create<ProjectStore>(set => ({
  projectList: {
    "f41c04e7-828f-486c-9e1d-c2058cb43274": {
      id: "f41c04e7-828f-486c-9e1d-c2058cb43274",
      title: "Team Stand-up",
      description:
        "Prepare the agenda and materials for the weekly department meeting.",
      updatedAt: "2026.01.17",
      createdAt: "2026.01.17",
      done: false,
      ownerId: "smth",
    },
    "207376ac-ee5f-405d-acb8-af7f42c50c95": {
      id: "207376ac-ee5f-405d-acb8-af7f42c50c95",
      title: "Pay Bills",
      description:
        "Settle utility and internet invoices before the end of the month.",
      updatedAt: "2026.01.15",
      createdAt: "2026.01.15",
      done: false,
      ownerId: "smth",
    },
    "284ab172-2341-468a-a82d-d15738eb149b": {
      id: "284ab172-2341-468a-a82d-d15738eb149b",
      title: "Gift Ideas",
      description: "Decide on and choose a birthday present for a friend.",
      updatedAt: "2026.01.14",
      createdAt: "2026.01.14",
      done: false,
      ownerId: "smth",
    },
  },
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
      const needToResetSelectedId = id == state.selectedProjectId

      return {
        selectedProjectId: needToResetSelectedId
          ? null
          : state.selectedProjectId,
        projectList: rest,
      }
    })
  },
  selectProject: id => {
    set({ selectedProjectId: id })
  },
  deselectProject: () => {
    set({ selectedProjectId: null })
  },
  updateProjectData: project => {
    set(state => ({
      projectList: {
        ...state.projectList,
        [project.id]: {
          ...project,
          updatedAt: new Date().toISOString().slice(0, 10).replace(/-/g, "."),
        },
      },
    }))
  },
}))
