import { Footer, Header } from "@/widgets/"
import type { FC, ReactNode } from "react"
import cl from './MainLayout.module.scss'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={cl.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
