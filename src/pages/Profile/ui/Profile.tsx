import { useUserStore } from "@/entities/user"

const Profile = () => {
  const { user } = useUserStore()

  if (!user) return <h1>Loading your profile...</h1>

  return <h1>Hello, {user.email}</h1>
}

export default Profile
