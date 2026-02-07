import { useParams } from "react-router-dom"

const ProjectById = () => {
  const { projectId } = useParams()

  if (!projectId) {
    return <h1>Can't find project with id {projectId}</h1>
  }

  return <h1>Project {projectId}</h1>
}

export default ProjectById
