import type { Project } from "@/entities/project"
import { useProjectStore } from "@/entities/project"
import type { FC } from "react"

type ProjectTasks = {
  project: Project
}

export const ProjectTasks: FC<ProjectTasks> = ({ project }) => {
  const { addNewTask } = useProjectStore()

  const addTask = () => {
    let title = prompt() ?? ""
    let description = prompt() ?? ""
    addNewTask(project.id, title, description)
  }

  return (
    <>
      <button onClick={addTask}>new task</button>
      {Object.entries(project.taskList).map(([taskId, task]) => (
        <div key={taskId}>
          <span>{task.title}</span>
          <span>{task.description}</span>
        </div>
      ))}
    </>
  )
}
