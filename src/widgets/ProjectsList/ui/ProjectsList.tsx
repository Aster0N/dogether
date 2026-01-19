import type { Project } from "@/entities/project"
import { useProjectStore } from "@/entities/project"
import { Copy } from "lucide-react"
import { useRef } from "react"
import cl from "./ProjectsList.module.scss"

const ProjectsList = () => {
  const { projectList, selectProject } = useProjectStore()
  const projectIdRefs = useRef<(HTMLElement | null)[]>([])

  // TODO hook
  const copyId = async (index: number) => {
    console.log(index, projectIdRefs.current)
    if (!projectIdRefs.current || !projectIdRefs.current[index]) {
      return
    }
    const projectId = projectIdRefs.current[index].innerText
    try {
      await navigator.clipboard.writeText(projectId)
      // TODO toast
    } catch (err) {
      console.error("error when copying project id", err)
    }
  }

  return (
    <div className={cl.project_grid}>
      {Object.entries(projectList).map(
        ([id, project]: [Project["id"], Project], i) => (
          <div
            className={cl.project_card}
            key={id}
            onClick={() => selectProject(id)}
          >
            <h6 className={cl.title}>{project.title}</h6>
            <div className={`_small ${cl.project_id_container}`}>
              <span
                ref={el => {
                  if (projectIdRefs.current) {
                    projectIdRefs.current[i] = el
                  }
                }}
                className={cl.project_id}
                onClick={() => copyId(i)}
              >
                {id}
              </span>
              &nbsp;
              <Copy size={18} />
            </div>
            <p className={cl.description}>{project.description}</p>
          </div>
        ),
      )}
    </div>
  )
}

export default ProjectsList
