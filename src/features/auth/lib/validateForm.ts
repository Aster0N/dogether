import type { z } from "zod"
import type { ZodMiniObject } from "zod/mini"

export interface ValidateForm {
  <T extends Record<string, string>>(
    data: T,
    zodSchema: z.ZodObject | ZodMiniObject,
  ): {
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
