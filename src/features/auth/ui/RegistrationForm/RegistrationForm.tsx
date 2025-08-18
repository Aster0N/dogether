import { Button, Input, Select } from "@/shared"
import { useState } from "react"
import cl from "./RegistrationForm.module.scss"

const RegistrationForm = () => {
  const [inputValue, setInputValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("")
  const [userSex, setUserSex] = useState("")
  const userSexOptions = ["male", "female"]
  const userSignUp = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  return (
    <div>
      <h2 className={cl.header}>Registration</h2>
      <form onSubmit={userSignUp}>
        <div className={cl.form_content}>
          <Input
            type="email"
            label="email"
            value={inputValue}
            required
            onChange={e => setInputValue(e.target.value)}
          />
          <Input
            type="password"
            label="password"
            value={passwordValue}
            required
            onChange={e => setPasswordValue(e.target.value)}
          />
          <Input
            type="password"
            label="confirm password"
            value={confirmPasswordValue}
            required
            onChange={e => setConfirmPasswordValue(e.target.value)}
          />
          <Select options={userSexOptions} valueLabel="sex" className={cl.select} />
        </div>
        <Button type="submit" big>
          sign up
        </Button>
      </form>
    </div>
  )
}

export default RegistrationForm
