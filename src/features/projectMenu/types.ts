export interface ProjectCreationStatus {
  isProcessed: boolean
  title: string
  description?: string
}

export const initialStatus: ProjectCreationStatus = {
  isProcessed: false,
  title: "",
  description: "",
}