import { useProjectStore } from "@/entities/project"

import { ProjectTasks } from "@/widgets/ProjectTasks"
import { useParams } from "react-router-dom"
import cl from "./ProjectById.module.scss"
import { ProjectByIdInfo } from "./ProjectByIdInfo"

const ProjectById = () => {
  const { projectId } = useParams()
  const { getProjectById, selectedProjectId, selectProject } = useProjectStore()

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

  return (
    <>
      <h4 className={cl.title}>{project.title}</h4>
      <ProjectByIdInfo project={project} />
      <ProjectTasks project={project} />
    </>
  )
}

export default ProjectById
