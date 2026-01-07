import { routePath } from "@/app/router"
import { useUserStore } from "@/entities/user"
import { Button, Input, Toast, useToastOpenTrigger } from "@/shared"
import { useActionState, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { initialLoginFormDataState, loginSchema } from "../../lib/loginSchema"
import { validateFormOnInputChange } from "../../lib/validateFormOnInputChange"
import { initialStatusState, userSignIn } from "../../model/userAuth"
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
      formData,
      loginSchema
    )
    setIsFormValid(isFormValid)
    setFormData(updatedFormData)
  }
  const { signin } = useUserStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (loginStatus.submitted && loginStatus.success) {
      signin(formData.email.value, formData.password.value)
      navigate(routePath.PROJECTS)
    }
  }, [loginStatus])

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
        <Toast onClose={onToastClose} isSuccessCode={loginStatus.success} />
      )}
    </div>
  )
}

export default LoginForm
