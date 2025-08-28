import type { InputNames } from "@/shared/ui/Input/Input"
import type { FieldData } from "./types"

export type LoginFormFields = Extract<InputNames, "email" | "password">
export type LoginFormFieldValues = Record<LoginFormFields, FieldData["value"]>
