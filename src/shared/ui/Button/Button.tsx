import clsx from "clsx"
import { type FC, type ReactNode } from "react"
import { useFormStatus } from "react-dom"
import cl from "./Button.module.scss"

interface Button extends React.HTMLProps<HTMLButtonElement> {
  children?: ReactNode
  big?: boolean
  dark?: boolean
  inline?: boolean
  danger?: boolean
  hint?: boolean
  type?: "submit" | "reset" | "button" | undefined
  onClick?: () => void
  className?: string
}

const Button: FC<Button> = ({
  children,
  big = false,
  dark = false,
  inline = false,
  danger = false,
  hint = false,
  onClick,
  type = "button",
  className,
  ...props
}) => {
  const formStatus = useFormStatus()

  return (
    <button
      className={clsx(
        cl.button,
        className,
        big ? cl.btn_large : cl.btn_small,
        dark && cl.btn_dark,
        inline && cl.btn_inline,
        danger && cl.btn_danger,
        hint && cl.btn_hint,
      )}
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
