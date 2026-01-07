import { routePath } from "@/app/router"
import { useUserStore, type User } from "@/entities/user"
import { Button, Input, Select, Toast, useToastOpenTrigger } from "@/shared"
import { useActionState, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  initialRegistrationFormDataState,
  registrationSchema,
} from "../../lib/registrationSchema"
import { validateFormOnInputChange } from "../../lib/validateFormOnInputChange"
import { initialStatusState, userSignUp } from "../../model/userAuth"
import cl from "./RegistrationForm.module.scss"

const RegistrationForm = () => {
  const [userSex, setUserSex] = useState("")
  const userSexOptions: User["sex"][] = ["male", "female"]
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
  const { signup } = useUserStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (registrationStatus.submitted && registrationStatus.success) {
      signup({ id: `${Date.now()}`, email: formData.email.value })
      navigate(routePath.PROJECTS)
    }
  }, [registrationStatus])

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
