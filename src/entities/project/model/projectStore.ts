import { create } from "zustand"
import type { ProjectStore } from "../types"

export const useProjectStore = create<ProjectStore>((set, get) => ({
  projectList: {
    "f41c04e7-828f-486c-9e1d-c2058cb43274": {
      id: "f41c04e7-828f-486c-9e1d-c2058cb43274",
      title: "Click on this card",
      description:
        "You can see briefly info about this project on the left side of the screen.",
      updatedAt: "2026.01.17",
      createdAt: "2026.01.17",
      done: false,
      ownerId: "smth",
      taskIds: [],
      taskGroupIds: [],
    },
  },
  selectedProjectId: null,
  taskGroupIds: [],
  taskIds: [],
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
      taskIds: [],
      taskGroupIds: [],
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
  getProjectById: id => {
    const uuidRegex =
      /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i
    const isIdValid = id.match(uuidRegex)

    if (!isIdValid) {
      return
    }

    const project = get().projectList[id]

    if (!project) {
      return
    }

    return project
  },

  addNewTask: (projectId, taskId) => {
    const project = get().projectList[projectId]

    if (!project) {
      return
    }

    set(state => ({
      projectList: {
        ...state.projectList,
        [projectId]: {
          ...project,
          taskIds: [...project.taskIds, taskId],
        },
      },
    }))
  },
}))
