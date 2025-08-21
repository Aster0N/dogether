import { sleep } from "@/shared"

export type InitialStatusState = {
  emailError: string
  passwordError: string
  isAnyErrors: boolean
  submitted: boolean
}

export const initialStatusState: InitialStatusState = {
  emailError: "",
  passwordError: "",
  isAnyErrors: false,
  submitted: false,
}

export const userSignIn = async (
  prevState: InitialStatusState,
  formData: FormData
): Promise<InitialStatusState> => {
  const email = formData.get("user_email") as string
  const password = formData.get("user_password") as string

  const status = {
    emailError: "",
    passwordError: "",
    isAnyErrors: false,
    submitted: true,
  }

  // validation will be here instead of these if statements
  if (!email) {
    status.emailError = "empty field"
    status.isAnyErrors = true
  }
  if (!password) {
    status.passwordError = "empty field"
    status.isAnyErrors = true
  }

  await sleep(1500) // ~ POST

  return status
}
