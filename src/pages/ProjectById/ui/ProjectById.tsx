import { useProjectStore } from "@/entities/project"

import { useParams } from "react-router-dom"
import cl from "./ProjectById.module.scss"
import { ProjectByIdInfo } from "./ProjectByIdInfo"

const ProjectById = () => {
  const { projectId } = useParams()
  const { getProjectById, selectedProjectId, selectProject, addNewTask } =
    useProjectStore()

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

  const addTask = () => {
    let title = prompt() ?? ""
    let description = prompt() ?? ""
    addNewTask(projectId, title, description)
  }

  return (
    <>
      <h4 className={cl.title}>{project.title}</h4>
      <ProjectByIdInfo project={project} />
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

export default ProjectById
