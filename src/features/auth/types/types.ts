import type { InputNames } from "@/shared/ui/Input/Input"
import type { ValidateForm } from "../lib/validateForm"

export type FormStatus = {
  success: boolean
  submitted: boolean
}
export type FieldData = {
  name: InputNames
  label?: string
  type: React.HTMLInputTypeAttribute
  value: string
  error: string
  isDirty: boolean
}
export type FormData<FieldNames extends InputNames> = Record<
  FieldNames,
  FieldData
>
export type ZodValidationResult = ReturnType<ValidateForm>
