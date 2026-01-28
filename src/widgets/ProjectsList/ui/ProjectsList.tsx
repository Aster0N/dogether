import type { Project } from "@/entities/project"
import { ProjectsListItem, useProjectStore } from "@/entities/project"
import cl from "./ProjectsList.module.scss"

type ProjectListItem = [Project["id"], Project]

const ProjectsList = () => {
  const { projectList } = useProjectStore()

  return (
    <>
      <div className={cl.project_grid}>
        {Object.entries(projectList).map(([id, project]: ProjectListItem) => (
          <ProjectsListItem projectId={id} project={project} key={id} />
        ))}
      </div>
    </>
  )
}

export default ProjectsList
