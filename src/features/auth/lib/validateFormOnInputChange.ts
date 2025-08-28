import type { InputNames } from "@/shared/ui/Input/Input"
import { z } from "zod"
import type { ZodMiniObject } from "zod/mini"
import type { FieldData, FormData, ZodValidationResult } from "../types/types"
import { grabMessageFromZodErrors } from "./grabMessageFromZodErrors"
import { validateForm } from "./validateForm"

type InputValidationResult<T extends InputNames> = {
  isFormValid: boolean
  updatedFormData: FormData<T>
}

interface ValidateFormOnInputChange {
  <T extends InputNames>(
    event: React.ChangeEvent<HTMLInputElement>,
    formData: FormData<T>,
    schema: z.ZodObject | ZodMiniObject
  ): InputValidationResult<T>
}

export const validateFormOnInputChange: ValidateFormOnInputChange = (
  event,
  formData,
  schema
) => {
  const name = event.target.name as keyof typeof formData
  const value = event.target.value

  const updatedData = {
    ...formData,
    [name]: {
      ...formData[name],
      value,
      error: "",
      isDirty: true,
    },
  } as FormData<typeof name>

  const formValues = Object.fromEntries(
    Object.entries(updatedData).map(([key, field]) => [
      key,
      (field as FieldData).value,
    ])
  ) as Record<InputNames, string>

  const validationResult: ZodValidationResult = validateForm(formValues, schema)

  if (validationResult.success) {
    return {
      isFormValid: true,
      updatedFormData: updatedData,
    }
  }

  const errors = grabMessageFromZodErrors(
    validationResult,
    Object.values(updatedData)
  )

  return {
    isFormValid: false,
    updatedFormData: {
      ...updatedData,
      [name]: {
        ...updatedData[name],
        error: errors[name] || "",
      },
    },
  }
}
