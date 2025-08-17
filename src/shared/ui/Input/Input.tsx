import type { FC, InputHTMLAttributes } from "react"
import { useId, useState } from "react"
import cl from "./Input.module.scss"

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input: FC<Input> = ({ type, label, value, onChange }) => {
  const inputId = `${useId()}`
  const [isFocused, setIsFocused] = useState(false)
  const onFocus = () => setIsFocused(true)
  const onBlur = () => setIsFocused(false)

  return (
    <div className={cl.input_wrapper}>
      {label && (
        <label
          htmlFor={inputId}
          className={`${cl.label} ${isFocused || value ? cl.focused : ""}`}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={inputId}
        className={cl.input}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
