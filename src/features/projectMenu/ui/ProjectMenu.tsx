import { ProjectCreationForm, useProjectStore } from "@/entities/project"
import { Button } from "@/shared"
import { Plus } from "lucide-react"
import { useActionState, useEffect, useState } from "react"
import { updateNewProjectStatus } from "../model/updateNewProjectStatus"
import { initialStatus } from "../types"
import cl from "./ProjectMenu.module.scss"

const ProjectMenu = () => {
  const { addNewProject } = useProjectStore()
  const [isCreateProjectFormOpen, setIsCreateProjectFormOpen] = useState(false)

  const [newProjectStatus, createProjectAction, isPending] = useActionState(
    updateNewProjectStatus,
    initialStatus,
  )

  useEffect(() => {
    if (newProjectStatus.isProcessed) {
      addNewProject(newProjectStatus.title, newProjectStatus.description ?? "")
      setIsCreateProjectFormOpen(false)
      newProjectStatus.isProcessed = false
    }
  }, [newProjectStatus.isProcessed])

  return (
    <div className={cl.project_menu}>
      <Button
        dark
        className={cl.menu_btn}
        onClick={() => setIsCreateProjectFormOpen(prev => !prev)}
      >
        <div className={`_small ${cl.menu_btn_content}`}>
          <span>{isPending ? "creating" : "create"}</span>
          <Plus color="#20927b" strokeWidth={2} />
        </div>
      </Button>
      {isCreateProjectFormOpen && (
        <ProjectCreationForm formAction={createProjectAction} />
      )}
    </div>
  )
}

export default ProjectMenu
