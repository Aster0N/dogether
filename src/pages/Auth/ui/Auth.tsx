import { useUserStore } from "@/entities/user"

const Auth = () => {
  const { login } = useUserStore()

  return (
    <>
      <h2>Login</h2>
      <button className="_large-btn" onClick={() => login()}>
        login
      </button>
    </>
  )
}

export default Auth
