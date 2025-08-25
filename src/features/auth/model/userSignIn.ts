import { sleep } from "@/shared"
import type { FormStatus, LoginFormFields } from "../types/loginFormTypes"

export const initialStatusState: FormStatus = {
  success: false,
  submitted: false,
}

const postData = async (
  email: string,
  password: string
): Promise<FormStatus> => {
  await sleep(1500)
  return { success: true, submitted: true }
}

export const userSignIn = async (
  prevState: FormStatus,
  formData: FormData
): Promise<FormStatus> => {
  const emailData: LoginFormFields = "email"
  const passwordData: LoginFormFields = "password"

  const email = formData.get(emailData) as string
  const password = formData.get(passwordData) as string

  const status = postData(email, password)
  return status
}
