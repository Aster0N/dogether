import { Button, Input, Toast } from "@/shared"
import type { InputNames } from "@/shared/ui/Input/Input"
import { useActionState, useEffect, useState } from "react"
import { grabLoginFormErrors } from "../../lib/grabLoginFormErrors"
import { validateLoginForm } from "../../lib/loginSchema"
import { initialStatusState, userSignIn } from "../../model/userSignIn"
import type {
  LoginFormData,
  ValidationResult,
} from "../../types/loginFormTypes"
import cl from "./LoginForm.module.scss"

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: {
      name: "email",
      value: "",
      error: "",
      isDirty: false,
    },
    password: {
      name: "password",
      value: "",
      error: "",
      isDirty: false,
    },
  })
  const [isFormValid, setIsFormValid] = useState(false)

  const [loginStatus, formAction, isPending] = useActionState(
    userSignIn,
    initialStatusState
  )
  const [showToast, setShowToast] = useState(false)
  useEffect(() => {
    if (loginStatus.submitted) {
      setShowToast(true)
      loginStatus.submitted = false
    }
  }, [loginStatus.submitted])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormValid(false)
    const name = event.target.name as InputNames
    const value = event.target.value

    const updatedData = {
      ...formData,
      [name]: {
        ...formData[name],
        value,
        error: "",
        isDirty: true,
      },
    }

    setFormData(updatedData)

    const { email, password } = updatedData
    const validationResult: ValidationResult = validateLoginForm({
      email: email.value,
      password: password.value,
    })

    if (validationResult.success) {
      setIsFormValid(true)
    }

    if (!validationResult.success && validationResult.error?.issues) {
      const errors = grabLoginFormErrors(validationResult, [email, password])

      setFormData(prev => ({
        ...prev,
        [name]: {
          ...prev[name],
          error: errors[name],
        },
      }))
    }
  }

  return (
    <div>
      <h2 className={cl.header}>Login</h2>
      <form action={formAction}>
        <div className={cl.form_content}>
          <Input
            type="email"
            label="email"
            name="email"
            value={formData.email.value}
            error={formData.email.error}
            onChange={handleChange}
          />
          <Input
            type="password"
            label="password"
            name="password"
            value={formData.password.value}
            error={formData.password.error}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" disabled={!isFormValid} big>
          {isPending ? "wait..." : "sign in"}
        </Button>
      </form>
      {showToast && (
        <Toast
          onClose={() => setShowToast(false)}
          isSuccessCode={loginStatus.success}
          messages={{ valid: "success", invalid: "try again" }}
        />
      )}
    </div>
  )
}

export default LoginForm
