import type { FieldData } from "./types"

export type LoginFormFields = "email" | "password"
export type LoginFormFieldValues = Record<LoginFormFields, FieldData["value"]>
