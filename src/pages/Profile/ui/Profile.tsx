import { routePath } from "@/app/router"
import { useUserStore } from "@/entities/user"
import { useNavigate } from "react-router-dom"

const Profile = () => {
  const { user, logout } = useUserStore()
  const navigate = useNavigate()

  const userLogout = async () => {
    await logout()
    navigate(routePath.HOME)
  }

  if (!user) return <h1>Loading your profile...</h1>

  return (
    <>
      <h1>Hello, {user.email}</h1>
      <button className="_btn-large" onClick={() => userLogout()}>
        logout
      </button>
    </>
  )
}

export default Profile
