import { Button, Input, Select, Toast, useToastOpenTrigger } from "@/shared"
import { useActionState, useState } from "react"
import {
  initialRegistrationFormDataState,
  registrationSchema,
} from "../../lib/registrationSchema"
import { validateFormOnInputChange } from "../../lib/validateFormOnInputChange"
import { initialStatusState, userSignUp } from "../../model/userAuth"
import cl from "./RegistrationForm.module.scss"

const RegistrationForm = () => {
  const [userSex, setUserSex] = useState("")
  const userSexOptions = ["male", "female"]
  const handleSelectValueChange = (value: string) => {
    setUserSex(value)
  }
  const [formData, setFormData] = useState(initialRegistrationFormDataState)
  const [isFormValid, setIsFormValid] = useState(false)
  const [registrationStatus, formAction, isPending] = useActionState(
    userSignUp,
    initialStatusState
  )
  const { showToast, onToastClose } = useToastOpenTrigger(
    registrationStatus.submitted
  )
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { isFormValid, updatedFormData } = validateFormOnInputChange(
      event,
      formData,
      registrationSchema
    )
    setIsFormValid(isFormValid)
    setFormData(updatedFormData)
  }

  return (
    <div>
      <h2 className={cl.header}>Registration</h2>
      <form action={formAction}>
        <div className={cl.form_content}>
          {Object.values(formData).map(field => (
            <Input
              key={field.name}
              type={field.type}
              label={field.label ?? field.name}
              name={field.name}
              value={field.value}
              error={field.error}
              onChange={handleInputChange}
            />
          ))}
          <Select
            name="selectSex"
            options={userSexOptions}
            valueLabel="sex"
            value={userSex}
            className={cl.select}
            onChange={handleSelectValueChange}
          />
        </div>
        <Button type="submit" disabled={!isFormValid} big>
          {isPending ? "submitting..." : "sign up"}
        </Button>
      </form>
      {showToast && (
        <Toast
          onClose={onToastClose}
          isSuccessCode={registrationStatus.success}
        />
      )}
    </div>
  )
}

export default RegistrationForm
