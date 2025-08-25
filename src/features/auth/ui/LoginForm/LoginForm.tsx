import { Button, Input, Toast, useToastOpenTrigger } from "@/shared"
import { useActionState, useState } from "react"
import { initialLoginFormDataState } from "../../lib/loginSchema"
import { validateFormOnInputChange } from "../../lib/validateFormOnInputChange"
import { initialStatusState, userSignIn } from "../../model/userSignIn"
import cl from "./LoginForm.module.scss"

const LoginForm = () => {
  const [formData, setFormData] = useState(initialLoginFormDataState)
  const [isFormValid, setIsFormValid] = useState(false)
  const [loginStatus, formAction, isPending] = useActionState(
    userSignIn,
    initialStatusState
  )
  const { showToast, onToastClose } = useToastOpenTrigger(loginStatus.submitted)
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { isFormValid, updatedFormData } = validateFormOnInputChange(
      event,
      formData
    )
    setIsFormValid(isFormValid)
    setFormData(updatedFormData)
  }

  return (
    <div>
      <h2 className={cl.header}>Login</h2>
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
        </div>
        <Button type="submit" disabled={!isFormValid} big>
          {isPending ? "submitting..." : "sign in"}
        </Button>
      </form>
      {showToast && (
        <Toast
          onClose={onToastClose}
          isSuccessCode={loginStatus.success}
          messages={{ valid: "success", invalid: "try again" }}
        />
      )}
    </div>
  )
}

export default LoginForm
