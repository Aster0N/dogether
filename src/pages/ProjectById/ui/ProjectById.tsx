import { useProjectStore } from "@/entities/project"
import { useTaskStore } from "@/entities/task"
import { EditableBlock } from "@/shared"
import type { ChangeEvent } from "react"
import { useParams } from "react-router-dom"
import cl from "./ProjectById.module.scss"

const ProjectById = () => {
  const { projectId } = useParams()
  const { addNewTask, taskList } = useTaskStore()
  const {
    getProjectById,
    selectedProjectId,
    selectProject,
    updateProjectData,
  } = useProjectStore()

  if (!projectId) {
    return <span>{projectId} might be wrong</span>
  }

  if (!selectedProjectId) {
    selectProject(projectId)
  }

  const project = getProjectById(projectId)

  if (!project) {
    return <span>Can't find project with id {projectId}</span>
  }

  const onDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedProject = {
      ...project,
      description: e.target.value,
    }
    updateProjectData(updatedProject)
  }

  const addTask = () => {
    let title = prompt() ?? ""
    let description = prompt() ?? ""
    addNewTask(projectId, title, description)
  }

  return (
    <>
      <h4 className={cl.title}>{project.title}</h4>
      <div className={cl.info_header_wrapper}>
        <div className={cl.description_wrapper}>
          {project.description && (
            <EditableBlock
              trackedValue={project.description}
              className={cl.description}
              onChange={onDescriptionChange}
              isTextArea
              name="descriptionInfo"
            />
          )}
        </div>
        <button onClick={addTask}>new task</button>
        {getProjectById(projectId)?.taskIds.map(taskId => (
          <div key={taskId}>
            <span>{taskList[taskId].title}</span>
            <span>{taskList[taskId].description}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProjectById
