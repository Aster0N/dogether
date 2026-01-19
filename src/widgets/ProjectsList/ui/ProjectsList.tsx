import type { Project } from "@/entities/project"
import { useProjectStore } from "@/entities/project"
import { Button, Toast, useToastOpenTrigger } from "@/shared"
import { Copy } from "lucide-react"
import { useRef, useState } from "react"
import cl from "./ProjectsList.module.scss"

const ProjectsList = () => {
  const { projectList, selectProject } = useProjectStore()
  const projectIdRefs = useRef<(HTMLElement | null)[]>([])
  const [isIdCopying, setIsIdCopying] = useState(false)
  const [isIdCopiedSuccessfully, setIsCopiedSuccessfully] = useState(false)
  const { showToast, onToastClose } = useToastOpenTrigger(isIdCopying)

  const extractUUID = (str: string): string => {
    const uuidRegex =
      /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i
    const match = str.match(uuidRegex)
    return match ? match[0] : ""
  }

  // TODO decompose (hooks, Project component)
  const copyId = async (index: number) => {
    setIsIdCopying(true)
    if (!projectIdRefs.current || !projectIdRefs.current[index]) {
      return
    }
    const projectId = extractUUID(projectIdRefs.current[index].innerText)
    try {
      await navigator.clipboard.writeText(projectId)
      setIsCopiedSuccessfully(true)
    } catch (err) {
      console.error("error when copying project id", err)
      setIsCopiedSuccessfully(false)
    }
    setIsIdCopying(false)
  }

  return (
    <>
      <div className={cl.project_grid}>
        {Object.entries(projectList).map(
          ([id, project]: [Project["id"], Project], i) => (
            <div
              className={cl.project_card}
              key={id}
              onClick={() => selectProject(id)}
            >
              <h6 className={cl.title}>{project.title}</h6>
              <Button
                className={cl.project_id_container}
                ref={el => {
                  if (projectIdRefs.current) {
                    projectIdRefs.current[i] = el
                  }
                }}
                onClick={() => copyId(i)}
              >
                <span className={cl.project_id}>{id}</span>
                <Copy size={18} />
              </Button>
              <p className={cl.description}>{project.description}</p>
            </div>
          ),
        )}
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

export default ProjectsList
