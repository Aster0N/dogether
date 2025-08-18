import { Eye, EyeOff } from "lucide-react"
import type { FC, InputHTMLAttributes } from "react"
import { useId, useState } from "react"
import Button from "../Button/Button"
import cl from "./Input.module.scss"

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input: FC<Input> = ({ type, label, value, onChange }) => {
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
      {label && (
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
          className={cl.input}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          onChange={onChange}
        />
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
