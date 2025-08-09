export interface User {
  id: string
  email: string
  sex?: "male" | "female"
}

export interface UserStore {
  user: User | null
  isAuth: boolean
  login: () => void
  logout: () => void
}
