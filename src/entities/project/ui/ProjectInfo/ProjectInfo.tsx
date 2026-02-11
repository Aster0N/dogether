import { EditableBlock } from "@/shared"
import type { ChangeEvent } from "react"
import { handleTitleChange } from "../../model/handleTitleChange"
import { useProjectStore } from "../../model/projectStore"
import cl from "./ProjectInfo.module.scss"

const ProjectInfo = () => {
  const { projectList, selectedProjectId, updateProjectData } =
    useProjectStore()
  const project = selectedProjectId ? projectList[selectedProjectId] : null

  if (!project) {
    return null
  }

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedProject = handleTitleChange(e, project)
    updateProjectData(updatedProject)
  }

  return (
    <div className={cl.info_body}>
      <div className="_space-between">
        <EditableBlock
          onChange={changeTitle}
          trackedValue={project.title}
          resetValueOnDeps={[selectedProjectId]}
					className={cl.editable_title}
        />
      </div>
      <div className={cl.divider}></div>
      <p className={`_small ${cl.description}`}>{project.description}</p>
      {project.description && <div className={cl.divider}></div>}
      <p className="_small">last update {project.updatedAt}</p>
    </div>
  )
}

export default ProjectInfo
