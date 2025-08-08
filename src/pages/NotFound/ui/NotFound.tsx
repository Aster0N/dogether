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
      <button onClick={handleRedirect}>go home</button>
    </>
  )
}

export default NotFound
