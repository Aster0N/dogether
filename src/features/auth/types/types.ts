import type { ValidateForm } from "../lib/loginSchema"
import type { LoginFormFields } from "./loginFormTypes"

export type FormStatus = {
  success: boolean
  submitted: boolean
}

export type FieldData = {
  name: LoginFormFields // | RegistrationFormFields
  label?: string
  type: React.HTMLInputTypeAttribute
  value: string
  error: string
  isDirty: boolean
}
export type ZodValidationResult = ReturnType<ValidateForm>
