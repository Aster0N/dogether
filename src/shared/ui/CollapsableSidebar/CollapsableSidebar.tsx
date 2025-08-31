import { useState, type FC, type ReactNode } from "react"
import Button from "../Button/Button"
import cl from "./CollapsableSidebar.module.scss"

interface CollapsableSidebar {
  children: ReactNode
  className?: string
}

const CollapsableSidebar: FC<CollapsableSidebar> = ({
  children,
  className,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const collapseSidebar = () => {
    setIsCollapsed(prev => !prev)
  }

  return (
    <div
      className={`${isCollapsed ? cl._collapsed : ""} ${cl.sidebar_wrapper} ${
        className ?? ""
      }`}
    >
      <Button inline onClick={collapseSidebar} className={cl.collapse_btn}>
        x
      </Button>
      <div className={cl.sidebar_body}>{children}</div>
    </div>
  )
}

export default CollapsableSidebar
