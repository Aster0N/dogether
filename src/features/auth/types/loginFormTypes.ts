import type { ValidateLoginForm } from "../lib/loginSchema"

export type LoginFormStatus = {
  success: boolean
  submitted: boolean
}
export type ValidationResult = ReturnType<ValidateLoginForm>
export type LoginFormFields = "email" | "password"
export type FieldData = {
  name: LoginFormFields
  value: string
  error: string
  isDirty: boolean
}
export type LoginFormData = Record<LoginFormFields, FieldData>
export type LoginFormFieldValues = Record<LoginFormFields, FieldData["value"]>
