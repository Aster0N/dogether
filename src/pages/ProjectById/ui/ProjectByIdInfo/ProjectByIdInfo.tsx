import type { Project } from "@/entities/project"
import { useProjectStore } from "@/entities/project"
import { EditableBlock } from "@/shared"
import type { ChangeEvent, FC } from "react"
import cl from "./ProjectByIdInfo.module.scss"

type ProjectByIdInfo = {
  project: Project
}

export const ProjectByIdInfo: FC<ProjectByIdInfo> = ({ project }) => {
  const { updateProjectData } = useProjectStore()
  const onDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedProject = {
      ...project,
      description: e.target.value,
    }
    updateProjectData(updatedProject)
  }

  return (
    <div className={cl.info_header_wrapper}>
      <div className={cl.description_wrapper}>
        {project.description && (
          <EditableBlock
            trackedValue={project.description}
            className={cl.description}
            onChange={onDescriptionChange}
            isTextArea
            name="descriptionInfo"
          />
        )}
      </div>
    </div>
  )
}
