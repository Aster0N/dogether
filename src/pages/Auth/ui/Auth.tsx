import { LoginForm, RegistrationForm } from "@/features/auth"
import { useState } from "react"

const Auth = () => {
  const [isLoginForm, setIsLoginForm] = useState(true)

  return (
    <>
      {isLoginForm && <LoginForm />}
      {!isLoginForm && <RegistrationForm />}
      <button onClick={() => setIsLoginForm(!isLoginForm)}>
        {isLoginForm ? "Not a member?" : "Already have an account?"}
      </button>
    </>
  )
}

export default Auth
