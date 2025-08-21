import { Button, Input, Toast } from "@/shared"
import { useActionState, useEffect, useState } from "react"
import { initialStatusState, userSignIn } from "../../model/userSignIn"
import cl from "./LoginForm.module.scss"

const LoginForm = () => {
  const [inputValue, setInputValue] = useState("a@a.a")
  const [passwordValue, setPasswordValue] = useState("")
  const [loginStatus, formAction, isPending] = useActionState(
    userSignIn,
    initialStatusState
  )
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    if (loginStatus.submitted) {
      setShowToast(true)
      loginStatus.submitted = false
    }
  }, [loginStatus.submitted])

  return (
    <div>
      <h2 className={cl.header}>Login</h2>
      <form action={formAction}>
        <div className={cl.form_content}>
          <Input
            type="email"
            label="email"
            name="user_email"
            value={inputValue}
            required
            onChange={e => setInputValue(e.target.value)}
          />
          <Input
            type="password"
            label="password"
            name="user_password"
            value={passwordValue}
            required
            onChange={e => setPasswordValue(e.target.value)}
          />
        </div>
        <Button type="submit" big>
          {isPending ? "wait..." : "sign in"}
        </Button>
      </form>
      {showToast && (
        <Toast
          onClose={() => setShowToast(false)}
          isSuccessCode={!loginStatus.isAnyErrors}
          messages={{ valid: "success", invalid: "try again" }}
        />
      )}
    </div>
  )
}

export default LoginForm
