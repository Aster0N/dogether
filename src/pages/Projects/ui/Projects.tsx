import { ProjectsList, ProjectsSidebar } from "@/widgets"
import cl from "./Projects.module.scss"

const Projects = () => {
  return (
    <>
      <h4 className={cl.header}>My projects</h4>
      <div className={cl.projects_wrapper}>
        <ProjectsSidebar />
        <ProjectsList />
      </div>
    </>
  )
}

export default Projects
