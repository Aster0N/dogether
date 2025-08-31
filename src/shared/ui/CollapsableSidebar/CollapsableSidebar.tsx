import { useState, type FC, type ReactNode } from "react"
import Button from "../Button/Button"
import cl from "./CollapsableSidebar.module.scss"

interface CollapsableSidebar {
  children: ReactNode
}

const CollapsableSidebar: FC<CollapsableSidebar> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const collapseSidebar = () => {
    setIsCollapsed(prev => !prev)
  }

  return (
    <div
      className={`${isCollapsed ? cl._collapsed : ""} ${cl.sidebar_wrapper}`}
    >
      <div className={cl.collapse_btn_wrapper}>
        <Button inline onClick={collapseSidebar}>
          x
        </Button>
      </div>
      <div className={cl.sidebar_body}>{children}</div>
    </div>
  )
}

export default CollapsableSidebar
