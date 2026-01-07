import { ProjectMenu } from "@/features"
import { CollapsableSidebar } from "@/shared"

const ProjectsSidebar = () => {
  return (
    <CollapsableSidebar>
      <ProjectMenu />
      <hr />
      <span>@briefly info here</span>
    </CollapsableSidebar>
  )
}

export default ProjectsSidebar
