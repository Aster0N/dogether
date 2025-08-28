import { z } from "zod"
import type { RegistrationFormFields } from "../types/registrationFormTypes.ts"
import type { FormData } from "../types/types.ts"

export const registrationSchema = z
  .object({
    email: z.email({ message: "Incorrect email address" }),
    password: z
      .string()
      .check(z.minLength(6, { message: "Must be at least 6 symbols" })),
    passwordConfirm: z
      .string()
      .check(z.minLength(6, { message: "Must be at least 6 symbols" })),
  })
  .refine(data => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  })

export const initialRegistrationFormDataState: FormData<RegistrationFormFields> =
  {
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
    passwordConfirm: {
      name: "passwordConfirm",
      label: "confirm your password",
      type: "password",
      value: "",
      error: "",
      isDirty: false,
    },
  }
