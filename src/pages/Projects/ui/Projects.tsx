import { CollapsableSidebar } from "@/shared"
import cl from "./Projects.module.scss"

const Projects = () => {
  return (
    <>
      <h4>My projects</h4>
      <div className={cl.projects_wrapper}>
        <CollapsableSidebar>
          <ul>
            <li>some</li>
            <li>thing</li>
            <li>here</li>
          </ul>
        </CollapsableSidebar>
        <div>projects list</div>
      </div>
    </>
  )
}

export default Projects
