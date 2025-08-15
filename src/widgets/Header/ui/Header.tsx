import { Navbar } from "@/widgets/"
import cl from "./Header.module.scss"

const Header = () => {
  return (
    <header className={cl.header}>
      <Navbar />
    </header>
  )
}

export default Header
