import { ProjectInfo } from "@/entities/project"
import { ProjectMenu } from "@/features"
import { CollapsableSidebar } from "@/shared"

const ProjectsSidebar = () => {
  return (
    <CollapsableSidebar>
      <ProjectMenu />
      <ProjectInfo />
    </CollapsableSidebar>
  )
}

export default ProjectsSidebar
