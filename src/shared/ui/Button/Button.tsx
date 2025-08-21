import { type FC, type ReactNode } from "react"
import { useFormStatus } from "react-dom"
import cl from "./Button.module.scss"

interface Button extends React.HTMLProps<HTMLButtonElement> {
  children?: ReactNode
  big?: boolean
  dark?: boolean
  inline?: boolean
  type?: "submit" | "reset" | "button" | undefined
  onClick?: () => void
  className?: string
}

const Button: FC<Button> = ({
  children,
  big = false,
  dark = false,
  inline = false,
  onClick,
  type = "button",
  className,
  ...props
}) => {
  const formStatus = useFormStatus()

  return (
    <button
      className={`${cl.button} ${big ? cl.btn_large : cl.btn_small} ${
        dark ? cl.btn_dark : ""
      } ${inline ? cl.btn_inline : ""} ${className ? className : ""}`}
      onClick={onClick}
      type={type}
      disabled={formStatus.pending}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
