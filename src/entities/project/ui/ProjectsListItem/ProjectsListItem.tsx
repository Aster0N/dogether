import { Button, copyToClipboard, Toast, useToastOpenTrigger } from "@/shared"
import { Copy } from "lucide-react"
import type { FC } from "react"
import { useRef, useState } from "react"
import { useProjectStore } from "../../model/projectStore"
import type { Project } from "../../types"
import cl from "./ProjectsListItem.module.scss"

type ProjectsListItemProps = {
  projectId: Project["id"]
  project: Project
}

const ProjectsListItem: FC<ProjectsListItemProps> = ({
  projectId,
  project,
  ...props
}) => {
  const { selectProject } = useProjectStore()

  const projectIdRefs = useRef<HTMLElement | null>(null)
  const [isIdCopying, setIsIdCopying] = useState(false)
  const [isIdCopiedSuccessfully, setIsCopiedSuccessfully] = useState(false)
  const { showToast, onToastClose } = useToastOpenTrigger(isIdCopying)

  const copyId = async () => {
    setIsIdCopying(true)
    const isCopied = await copyToClipboard({
      htmlElement: projectIdRefs.current,
    })
    if (isCopied) {
      setIsCopiedSuccessfully(isCopied)
    }
    setIsIdCopying(false)
  }

  return (
    <>
      <div
        className={cl.project_card}
        onClick={() => selectProject(projectId)}
        {...props}
      >
        <h6 className={cl.title}>{project.title}</h6>
        <Button
          className={cl.project_id_container}
          ref={el => {
            projectIdRefs.current = el
          }}
          onClick={copyId}
        >
          <span className={cl.project_id}>{projectId}</span>
          <Copy size={18} />
        </Button>
        <p className={cl.description}>{project.description}</p>
      </div>
      {showToast && (
        <Toast
          onClose={onToastClose}
          isSuccessCode={isIdCopiedSuccessfully}
          messages={{ valid: "id copied", invalid: "id copying error" }}
        />
      )}
    </>
  )
}

export default ProjectsListItem
