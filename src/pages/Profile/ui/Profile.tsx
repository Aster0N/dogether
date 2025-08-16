import { routePath } from "@/app/router"
import { useUserStore } from "@/entities/user"
import { Button } from "@/shared"
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
      <Button big={true} onClick={() => userLogout()}>
        logout
      </Button>
    </>
  )
}

export default Profile
