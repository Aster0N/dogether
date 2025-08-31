import { LoginForm, RegistrationForm } from "@/features/"
import { Button } from "@/shared"
import { useState } from "react"
import cl from "./Auth.module.scss"

const Auth = () => {
  const [isLoginForm, setIsLoginForm] = useState(true)

  return (
    <div className={cl.auth_wrapper}>
      <div className={cl.auth_content}>
        {isLoginForm ? <LoginForm /> : <RegistrationForm />}
        <Button big={false} inline onClick={() => setIsLoginForm(!isLoginForm)}>
          {isLoginForm ? "Not a member?" : "Already have an account?"}
        </Button>
      </div>
    </div>
  )
}

export default Auth
