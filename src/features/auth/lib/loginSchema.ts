import { z } from "zod/mini"
import type { LoginFormFields } from "../types/loginFormTypes"
import type { FormData } from "../types/types"

export const loginSchema = z.object({
  email: z.email({ error: "Incorrect email address" }),
  password: z
    .string()
    .check(z.minLength(6, { error: "Must be at least 6 symbols" })),
})

export const initialLoginFormDataState: FormData<LoginFormFields> = {
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
