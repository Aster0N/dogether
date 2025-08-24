import { sleep } from "@/shared"
import type { LoginFormStatus } from "../types/loginFormTypes"

export const initialStatusState: LoginFormStatus = {
  success: false,
  submitted: false,
}

const postData = async (
  email: string,
  password: string
): Promise<LoginFormStatus> => {
  await sleep(1500)
  return { success: true, submitted: true }
}

export const userSignIn = async (
  prevState: LoginFormStatus,
  formData: FormData
): Promise<LoginFormStatus> => {
  const email = formData.get("user_email") as string
  const password = formData.get("user_password") as string

  const status = postData(email, password)
  return status
}
