import { ProjectCreationForm, useProjectStore } from "@/entities/project"
import { Button } from "@/shared"
import { ChevronUp, Plus, Trash2 } from "lucide-react"
import { useActionState, useEffect, useState } from "react"
import { updateNewProjectStatus } from "../model/updateNewProjectStatus"
import { initialStatus } from "../types"
import cl from "./ProjectMenu.module.scss"

const ProjectMenu = () => {
  const { addNewProject, selectedProjectId, removeProjectById } =
    useProjectStore()
  const [isCreateProjectFormOpen, setIsCreateProjectFormOpen] = useState(false)

  const [newProjectStatus, createProjectAction] = useActionState(
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

  const deleteProject = () => {
    if (!selectedProjectId) {
      return
    }
    removeProjectById(selectedProjectId)
  }

  return (
    <div className={cl.project_menu}>
      <Button
        dark
        className={cl.menu_btn}
        onClick={() => setIsCreateProjectFormOpen(prev => !prev)}
      >
        <div className="_small _space-between">
          <span>create</span>
          {isCreateProjectFormOpen ? (
            <ChevronUp color="#20927b" strokeWidth={2} />
          ) : (
            <Plus color="#20927b" strokeWidth={2} />
          )}
        </div>
      </Button>
      {isCreateProjectFormOpen && (
        <ProjectCreationForm formAction={createProjectAction} />
      )}
      {selectedProjectId && (
        <Button
          danger
          dark
          className="_small _space-between"
          onClick={deleteProject}
        >
          <span>delete project</span>
          <Trash2 color="#d41a46" strokeWidth={2} />
        </Button>
      )}
    </div>
  )
}

export default ProjectMenu
