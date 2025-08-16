import { LoginForm, RegistrationForm } from "@/features/auth"
import { Button } from "@/shared"
import { useState } from "react"

const Auth = () => {
  const [isLoginForm, setIsLoginForm] = useState(true)

  return (
    <>
      {isLoginForm ? <LoginForm /> : <RegistrationForm />}
      <Button
        big={false}
        inline={true}
        onClick={() => setIsLoginForm(!isLoginForm)}
      >
        {isLoginForm ? "Not a member?" : "Already have an account?"}
      </Button>
    </>
  )
}

export default Auth
