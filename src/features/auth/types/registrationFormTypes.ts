import type { InputNames } from "@/shared/ui/Input/Input"
import type { FieldData } from "./types"

export type RegistrationFormFields = Extract<
  InputNames,
  "email" | "password" | "passwordConfirm"
>
export type RegistrationFormFieldValues = Record<
  RegistrationFormFields,
  FieldData["value"]
>
