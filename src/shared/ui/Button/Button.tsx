import type { FC, ReactNode } from "react"
import cl from "./Button.module.scss"

interface Button extends React.HTMLProps<HTMLButtonElement> {
  children?: ReactNode
  big?: boolean
  dark?: boolean
  inline?: boolean
  type?: "submit" | "reset" | "button" | undefined
  onClick?: () => void
}

const Button: FC<Button> = ({
  children,
  big = false,
  dark = false,
  inline = false,
  onClick,
  type,
}) => {
  return (
    <button
      className={`${cl.button} ${big ? cl.btn_large : cl.btn_small} ${
        dark ? cl.btn_dark : ""
      } ${inline ? cl.btn_inline : ""}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
