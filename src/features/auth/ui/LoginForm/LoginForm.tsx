import { useUserStore } from "@/entities/user"

const LoginForm = () => {
  const { login } = useUserStore()

  return (
    <div>
      <button className="_btn-large" onClick={() => login()}>
        login
      </button>
    </div>
  )
}

export default LoginForm
