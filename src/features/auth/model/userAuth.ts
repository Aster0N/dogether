import { type User } from "@/entities/user"
import { sleep } from "@/shared"
import type { LoginFormFields } from "../types/loginFormTypes"
import type { FormStatus } from "../types/types"

export const initialStatusState: FormStatus = {
  success: false,
  submitted: false,
}

const postSignIn = async (
  email: string,
  password: string
): Promise<FormStatus> => {
  await sleep(1500)
  return { success: true, submitted: true }
}

const postSignUp = async (
  email: string,
  password: string,
  sex?: User["sex"]
): Promise<FormStatus> => {
  await sleep(1500)
  return { success: true, submitted: true }
}

export const userSignUp = async (
  prevState: FormStatus,
  formData: FormData
): Promise<FormStatus> => {
  const emailData = "email"
  const passwordData = "password"
  const selectSex = "selectSex"

  const email = formData.get(emailData) as string
  const password = formData.get(passwordData) as string
  const sex = (formData.get(selectSex) as string) ?? ""

  const status = postSignUp(email, password)
  return status
}

export const userSignIn = async (
  prevState: FormStatus,
  formData: FormData
): Promise<FormStatus> => {
  const emailData: LoginFormFields = "email"
  const passwordData: LoginFormFields = "password"

  const email = formData.get(emailData) as string
  const password = formData.get(passwordData) as string

  const status = postSignIn(email, password)
  return status
}
