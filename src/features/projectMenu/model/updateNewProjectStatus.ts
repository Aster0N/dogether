import type { ProjectCreationStatus } from "../types"

export const updateNewProjectStatus = async (
  prevState: ProjectCreationStatus,
  formData: FormData,
): Promise<ProjectCreationStatus> => {
  // TODO standardize input field names
  const title = formData.get("projectTitle") as string
  const description = formData.get("projectDescription") as string

  if (!title) {
    return { isProcessed: false, title: "", description: "" }
  }

  return { isProcessed: true, title, description }
}
