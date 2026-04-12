import { useProjectStore, type Project } from "@/entities/project"
import type { Task } from "@/entities/project/types"
import { EditableBlock } from "@/shared"
import type { ChangeEvent, FC } from "react"
import cl from "./ProjectTasksList.module.scss"

type ProjectTasksList = {
  project: Project
}

export const ProjectTasksList: FC<ProjectTasksList> = ({ project }) => {
  const { updateTaskById } = useProjectStore()
  const projectTasks = Object.entries(project.taskList)

  const onTaskTitleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    elementId?: Task["id"],
  ) => {
    if (!elementId) {
      return
    }
    const updatedTask = {
      ...project.taskList[elementId],
      title: event.target.value,
    }
    updateTaskById(project.id, elementId, updatedTask)
  }

  return (
    <div className={cl.project_tasks_list}>
      {projectTasks.map(([taskId, task]) => (
        <div key={taskId}>
          <EditableBlock
            trackedValue={task.title}
            onChange={onTaskTitleChange}
            name={`task-${taskId}_title`}
            elementId={taskId}
          />
        </div>
      ))}
    </div>
  )
}
