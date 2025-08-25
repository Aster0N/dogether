import type { InputNames } from "@/shared/ui/Input/Input"
import type { LoginFormData } from "../types/loginFormTypes"
import type { ZodValidationResult } from "../types/types"
import { grabLoginFormErrors } from "./grabLoginFormErrors"
import { validateLoginForm } from "./loginSchema"

type InputValidationResult = {
  isFormValid: boolean
  updatedFormData: LoginFormData
}

interface ValidateFormOnInputChange {
  (
    event: React.ChangeEvent<HTMLInputElement>,
    formData: LoginFormData
  ): InputValidationResult
}

export const validateFormOnInputChange: ValidateFormOnInputChange = (
  event,
  formData
) => {
  const name = event.target.name as InputNames
  const value = event.target.value

  const updatedData: LoginFormData = {
    ...formData,
    [name]: {
      ...formData[name],
      value,
      error: "",
      isDirty: true,
    },
  }

  const validationResult: ZodValidationResult = validateLoginForm({
    email: updatedData.email.value,
    password: updatedData.password.value,
  })

  if (validationResult.success) {
    return {
      isFormValid: true,
      updatedFormData: updatedData,
    }
  }

  const errors = grabLoginFormErrors(validationResult, [
    updatedData.email,
    updatedData.password,
  ])

  return {
    isFormValid: false,
    updatedFormData: {
      ...formData,
      [name]: {
        ...formData[name],
        value,
        error: errors[name],
        isDirty: true,
      },
    },
  }
}
