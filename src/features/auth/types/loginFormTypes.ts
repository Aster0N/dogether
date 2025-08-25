import type { FieldData } from "./types"

export type LoginFormFields = "email" | "password"
export type LoginFormData = Record<LoginFormFields, FieldData>
export type LoginFormFieldValues = Record<LoginFormFields, FieldData["value"]>
