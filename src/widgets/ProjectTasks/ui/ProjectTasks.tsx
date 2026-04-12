import type { Project } from "@/entities/project"
import { useProjectStore } from "@/entities/project"
import { Button } from "@/shared"
import { Plus } from "lucide-react"
import type { FC } from "react"
import cl from "./ProjectTasks.module.scss"
import { ProjectTasksList } from "./ProjectTasksList"

type ProjectTasks = {
  project: Project
}

export const ProjectTasks: FC<ProjectTasks> = ({ project }) => {
  const { addNewTask } = useProjectStore()

  const addTask = () => {
    addNewTask(project.id)
  }

  return (
    <div className={cl.project_tasks}>
      <ProjectTasksList project={project} />
      <Button onClick={addTask} hint className="_space-between">
        <Plus size={18} />
        <span>new task</span>
      </Button>
    </div>
  )
}
