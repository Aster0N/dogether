import { Button } from "@/shared"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate("/")
  }

  return (
    <>
      <h1>Nope</h1>
      <p>Can't find that page</p>
      <Button onClick={handleRedirect}>go home</Button>
    </>
  )
}

export default NotFound
