import { useUserStore } from "@/entities/user"
import { Button, Input } from "@/shared"
import { useState } from "react"
import cl from "./LoginForm.module.scss"

const LoginForm = () => {
  const { login } = useUserStore()
  const [inputValue, setInputValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")

  const userLogIn = (e: React.SyntheticEvent) => {
    e.preventDefault()
    login()
  }

  return (
    <div>
      <h2 className={cl.header}>Login</h2>
      <form onSubmit={userLogIn}>
        <div className={cl.form_content}>
          <Input
            type="email"
            label="email"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <Input
            type="password"
            label="password"
            value={passwordValue}
            onChange={e => setPasswordValue(e.target.value)}
          />
        </div>
        <Button type="submit" big>
          sign in
        </Button>
      </form>
    </div>
  )
}

export default LoginForm
