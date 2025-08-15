import { useUserStore } from "@/entities/user"

const Auth = () => {
  const { login } = useUserStore()

  return (
    <>
      <h2>Login</h2>
      <button className="_btn-large" onClick={() => login()}>
        login
      </button>
    </>
  )
}

export default Auth
