import { create } from "zustand"
import type { Task, TaskStore } from "../types"

export const useTaskStore = create<TaskStore>((set, get) => ({
  taskList: {},
  addNewTask: (projectId, title, description) => {
    //check projectId
    const newId = crypto.randomUUID()
    const newTask: Task = {
      id: newId,
      title,
      description: description ?? "",
      updatedAt: new Date().toISOString().slice(0, 10).replace(/-/g, "."),
      createdAt: new Date().toISOString().slice(0, 10).replace(/-/g, "."),
      done: false,
      ownerId: "smth",
      projectId: projectId,
    }
    set(state => ({
      taskList: {
        ...state.taskList,
        [newId]: newTask,
      },
    }))
  },
}))
