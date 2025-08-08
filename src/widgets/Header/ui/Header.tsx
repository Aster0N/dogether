import cl from "./Header.module.scss"

const Header = () => {
  return (
    <header className={cl.header}>
      <nav className={cl.nav}>
        <span className="_btn-large">home</span>
        <span className="_btn-large">login</span>
      </nav>
    </header>
  )
}

export default Header
