import { useProjectStore } from "@/entities/project"
import { Button } from "@/shared"
import { Plus } from "lucide-react"
import { useEffect } from "react"
import { useShallow } from "zustand/shallow"
import cl from "./ProjectMenu.module.scss"

const ProjectMenu = () => {
  const { addNewProject } = useProjectStore()
  // ===logs===
  const projects = useProjectStore(useShallow(state => state.projectList))
  useEffect(() => {
    console.log(projects)
  }, [projects])

  const createProject = () => {
    const title = prompt("title") || ""
    const description = prompt("description") || ""

    addNewProject(title, description)
  }

  return (
    <div>
      <Button dark className={cl.menu_btn} onClick={createProject}>
        <div className={`_small ${cl.menu_btn_content}`}>
          <span>new project</span>
          <Plus color="#20927b" strokeWidth={2} />
        </div>
      </Button>
    </div>
  )
}

export default ProjectMenu
