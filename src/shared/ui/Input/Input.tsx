import { Eye, EyeOff, Info } from "lucide-react"
import type { FC, InputHTMLAttributes } from "react"
import { useId, useState } from "react"
import Button from "../Button/Button"
import cl from "./Input.module.scss"

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name?: InputNames
  error?: string
  small?: boolean
}
// TODO get off InputNames
export type InputNames =
  | "email"
  | "password"
  | "passwordConfirm"
  | "projectTitle"

const Input: FC<Input> = ({
  type,
  label,
  value,
  name,
  error,
  required = true,
  onChange,
  small,
}) => {
  const inputId = `${useId()}`
  const [isFocused, setIsFocused] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const onFocus = () => setIsFocused(true)
  const onBlur = () => setIsFocused(false)
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev)
  }
  const inputType =
    type === "password" ? (isPasswordVisible ? "text" : "password") : type

  return (
    <div className={cl.input_block_wrapper}>
      {label && !small && (
        <label
          htmlFor={inputId}
          className={`${cl.label} ${isFocused || value ? cl.focused : ""}`}
        >
          {label}
        </label>
      )}
      <div className={cl.input_wrapper}>
        <input
          type={inputType}
          id={inputId}
          className={`${cl.input} ${small && cl.input_small}`}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          name={name}
          required={required}
          onChange={onChange}
          placeholder={small && label ? label : ""}
        />
        {error && (
          <div className={`_small ${cl.validation_error}`}>
            <Info size={18} color="#d52650" />
            <span>{error}</span>
          </div>
        )}
        {type == "password" && (
          <Button
            inline
            className={cl.show_password}
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible && <Eye size={18} strokeWidth={2} />}
            {!isPasswordVisible && <EyeOff size={18} strokeWidth={2} />}
          </Button>
        )}
      </div>
    </div>
  )
}

export default Input
