import type { z } from "zod/mini"
import type { LoginFormFieldValues } from "../types/loginFormTypes"

export interface ValidateForm {
  // data: LoginFormFieldValues | RegistrationFormValues
  (data: LoginFormFieldValues, zodSchema: z.ZodMiniObject): {
    success: boolean
    error?: z.core.$ZodError
  }
}

export const validateForm: ValidateForm = (data, zodSchema) => {
  const result = zodSchema.safeParse(data)

  if (result.success) {
    return { success: true }
  }
  return { success: false, error: result.error }
}
