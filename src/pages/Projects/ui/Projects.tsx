import { CollapsableSidebar } from "@/shared"
import cl from "./Projects.module.scss"

const Projects = () => {
  return (
    <>
      <h4 className={cl.header}>My projects</h4>
      <div className={cl.projects_wrapper}>
        <CollapsableSidebar className={cl.project_sidebar}>
          <ul>
            <li>some</li>
            <li>thing</li>
            <li>here</li>
          </ul>
        </CollapsableSidebar>
        <div className={cl.project_grid}>projects here...</div>
      </div>
    </>
  )
}

export default Projects
