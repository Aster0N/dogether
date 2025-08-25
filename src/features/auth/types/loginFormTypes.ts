import type { ValidateLoginForm } from "../lib/loginSchema"

export type FormStatus = {
  success: boolean
  submitted: boolean
}
// mb change to ZODValidationResult
export type ValidationResult = ReturnType<ValidateLoginForm>
export type LoginFormFields = "email" | "password"
export type FieldData = {
  name: LoginFormFields
  label?: string
  type: React.HTMLInputTypeAttribute
  value: string
  error: string
  isDirty: boolean
}
export type LoginFormData = Record<LoginFormFields, FieldData>
export type LoginFormFieldValues = Record<LoginFormFields, FieldData["value"]>
