import { useUserStore } from "@/entities/user"
import { Button } from "@/shared"

const LoginForm = () => {
  const { login } = useUserStore()

  return (
    <div>
      <Button big={true} onClick={() => login()}>
        login
      </Button>
    </div>
  )
}

export default LoginForm
