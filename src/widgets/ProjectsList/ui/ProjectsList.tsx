import type { Project } from "@/entities/project"
import { useProjectStore } from "@/entities/project"
import cl from "./ProjectsList.module.scss"

const ProjectsList = () => {
  const { projectList, selectProject } = useProjectStore()

  return (
    <div className={cl.project_grid}>
      {Object.entries(projectList).map(
        ([id, project]: [Project["id"], Project]) => (
          <div
            className={cl.project_card}
            key={id}
            onClick={() => selectProject(id)}
          >
            <h6>{project.title}</h6>
            <span className="_small">{id}</span>
            <p className={cl.description}>{project.description}</p>
          </div>
        )
      )}
    </div>
  )
}

export default ProjectsList
