import { ProjectInfo, useProjectStore } from "@/entities/project"
import { useParams } from "react-router-dom"
import cl from "./ProjectById.module.scss"

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
      <div className={cl.info_header_wrapper}>
        {project.description && (
          <p className={cl.description}>{project.description}</p>
        )}
        <ProjectInfo />
      </div>
    </>
  )
}

export default ProjectById
