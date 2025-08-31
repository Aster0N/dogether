import { ProjectsSidebar } from "@/widgets"
import cl from "./Projects.module.scss"

const Projects = () => {
  return (
    <>
      <h4 className={cl.header}>My projects</h4>
      <div className={cl.projects_wrapper}>
        <ProjectsSidebar />
        <div className={cl.project_grid}>projects here...</div>
      </div>
    </>
  )
}

export default Projects
