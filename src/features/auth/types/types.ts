import type { ValidateForm } from "../lib/validateForm"

export type FormStatus = {
  success: boolean
  submitted: boolean
}
export type FieldData = {
  name: string
  label?: string
  type: React.HTMLInputTypeAttribute
  value: string
  error: string
  isDirty: boolean
}
export type FormData<FieldNames extends FieldData["name"]> = Record<
  FieldNames,
  FieldData
>
export type ZodValidationResult = ReturnType<ValidateForm>
