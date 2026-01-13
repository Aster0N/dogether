import type { FC } from "react"
import { useProjectStore } from "../../model/projectStore"
import cl from "./ProjectInfo.module.scss"

const ProjectInfo: FC = () => {
  const { projectList, selectedProjectId } = useProjectStore()
  const project = selectedProjectId ? projectList[selectedProjectId] : null

  if (!project) {
    return null
  }

  return (
    <div className={cl.info_body}>
      <h6 className={cl.title}>{project.title}</h6>
      <div className={cl.divider}></div>
      <p className={`_small ${cl.description}`}>{project.description}</p>
    </div>
  )
}

export default ProjectInfo
