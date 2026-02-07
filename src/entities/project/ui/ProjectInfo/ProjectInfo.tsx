import { handleTitleChange } from "@/entities/project/model/handleTitleChange"
import { Button } from "@/shared"
import { SquarePen } from "lucide-react"
import { useEffect, useState, type ChangeEvent } from "react"
import { useProjectStore } from "../../model/projectStore"
import cl from "./ProjectInfo.module.scss"

const ProjectInfo = () => {
  const { projectList, selectedProjectId, updateProjectData } =
    useProjectStore()
  const project = selectedProjectId ? projectList[selectedProjectId] : null
  const [isEditable, setIsEditable] = useState(false)
  const [titleValue, setTitleValue] = useState("")

  useEffect(() => {
    setIsEditable(false)
    setTitleValue("")
  }, [selectedProjectId])

  if (!project) {
    return null
  }

  const toggleEditableTitle = () => {
    setIsEditable(prev => !prev)
    if (!titleValue) {
      setTitleValue(project.title)
    }
  }

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value)
    const updatedProject = handleTitleChange(e, project)
    updateProjectData(updatedProject)
  }

  return (
    <div className={cl.info_body}>
      <div className="_space-between">
        <h6 className={cl.title}>
          {isEditable ? (
            <input
              value={titleValue}
              onChange={changeTitle}
              className={cl.editable_title}
            ></input>
          ) : (
            project.title
          )}
        </h6>
        <Button inline dark onClick={toggleEditableTitle}>
          <SquarePen size={18} />
        </Button>
      </div>
      <div className={cl.divider}></div>
      <p className={`_small ${cl.description}`}>{project.description}</p>
      {project.description && <div className={cl.divider}></div>}
      <p className="_small">last update {project.updatedAt}</p>
    </div>
  )
}

export default ProjectInfo
