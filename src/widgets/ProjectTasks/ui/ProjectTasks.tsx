import type { Project } from "@/entities/project"
import { useProjectStore } from "@/entities/project"
import type { FC } from "react"
import cl from "./ProjectTasks.module.scss"
import { ProjectTasksList } from "./ProjectTasksList"

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
    <div className={cl.project_tasks}>
      <ProjectTasksList project={project} />
      <button onClick={addTask}>new task</button>
    </div>
  )
}
