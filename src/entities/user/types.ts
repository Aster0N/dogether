export interface User {
  id: string
  email: string
  sex?: "male" | "female"
}

export interface UserStore {
  user: User | null
  isAuth: boolean
  signin: (email: User["email"], id: User["id"]) => void
  signup: (userData: User) => void
  logout: () => void
}
