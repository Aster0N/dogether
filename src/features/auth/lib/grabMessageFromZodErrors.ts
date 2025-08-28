import type { InputNames } from "@/shared/ui/Input/Input"
import { z } from "zod/mini"
import type { FieldData, ZodValidationResult } from "../types/types"

export interface GrabMessageFromZodErrors {
  (validationResult: ZodValidationResult, formFields: FieldData[]): Record<
    InputNames,
    string
  >
}

export const grabMessageFromZodErrors: GrabMessageFromZodErrors = (
  validationResult,
  formFields
) => {
  const validationError = validationResult.error as z.core.$ZodError
  const errors = {} as Record<InputNames, string>
  const fieldsDirty = {} as Record<InputNames, boolean>

  formFields.forEach(field => {
    errors[field.name] = ""
    fieldsDirty[field.name] = field.isDirty
  })

  validationError.issues.map(validationInfo => {
    const fieldWithErrorName = validationInfo.path[0] as keyof typeof errors

    if (fieldsDirty[fieldWithErrorName]) {
      errors[fieldWithErrorName] = validationInfo.message
    }
  })

  return errors
}
