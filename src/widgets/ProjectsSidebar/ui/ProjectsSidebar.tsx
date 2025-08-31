import { CreateProjectMenu } from "@/features"
import { CollapsableSidebar } from "@/shared"

const ProjectsSidebar = () => {
  return (
    <CollapsableSidebar>
      <CreateProjectMenu />
      <hr />
      <span>@briefly info here@briefly info here</span>
    </CollapsableSidebar>
  )
}

export default ProjectsSidebar
