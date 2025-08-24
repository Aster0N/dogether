import { z } from "zod/mini"
import type {
  FieldData,
  LoginFormFields,
  ValidationResult,
} from "../types/loginFormTypes"

export interface GrabLoginFormErrors {
  (validationResult: ValidationResult, formFields: FieldData[]): Record<
    LoginFormFields,
    string
  >
}

// TODO make it <versatile> for registration
export const grabLoginFormErrors: GrabLoginFormErrors = (
  validationResult,
  formFields
) => {
  const validationError = validationResult.error as z.core.$ZodError
  const errors = {} as Record<LoginFormFields, string>
  const fieldsDirty = {} as Record<LoginFormFields, boolean>

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
