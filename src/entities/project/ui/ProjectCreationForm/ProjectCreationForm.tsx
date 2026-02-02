import { Button, Input, TextArea } from "@/shared"
import cl from "./ProjectCreationForm.module.scss"

type ProjectCreationFormProps = {
  formAction: (payload: FormData) => void
}

const ProjectCreationForm = ({ formAction }: ProjectCreationFormProps) => {
  return (
    <form action={formAction} className={cl.form}>
      <Input
        type={"text"}
        label={"title"}
        name={"projectTitle"}
        required
        small
      />
      <TextArea
        name="projectDescription"
        placeholder="description"
        toggleWithLabel="toggle description"
      />
      <Button type="submit">create</Button>
    </form>
  )
}

export default ProjectCreationForm
