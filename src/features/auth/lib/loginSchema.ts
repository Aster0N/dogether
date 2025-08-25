import { z } from "zod/mini"
import type {
  LoginFormData,
  LoginFormFieldValues,
} from "../types/loginFormTypes"

export const loginSchema = z.object({
  email: z.email({ error: "Incorrect email address" }),
  password: z
    .string()
    .check(z.minLength(6, { error: "Must be at least 6 symbols" })),
})

export const initialLoginFormDataState: LoginFormData = {
  email: {
    name: "email",
    type: "email",
    value: "",
    error: "",
    isDirty: false,
  },
  password: {
    name: "password",
    type: "password",
    value: "",
    error: "",
    isDirty: false,
  },
}

export interface ValidateLoginForm {
  (data: LoginFormFieldValues): {
    success: boolean
    error?: z.core.$ZodError
  }
}
// TODO pass here form schema as z.ZodMiniObject
export const validateLoginForm: ValidateLoginForm = data => {
  const result = loginSchema.safeParse(data)

  if (result.success) {
    return { success: true }
  }
  return { success: false, error: result.error }
}
