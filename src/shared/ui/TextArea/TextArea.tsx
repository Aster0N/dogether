import { useId, useState, type FC, type TextareaHTMLAttributes } from "react"
import Button from "../Button/Button"
import cl from "./Textarea.module.scss"

interface Textarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  toggleWithLabel?: string
  className?: string
}

const Textarea: FC<Textarea> = ({
  label,
  placeholder,
  name,
  rows,
  cols,
  toggleWithLabel,
  onChange,
  className,
  ...props
}) => {
  const textareaId = useId()
  const isLabelOptional = !!toggleWithLabel?.length
  const [isTextAreaOpen, setIsTextAreaOpen] = useState(isLabelOptional)

  const toggleTextArea = () => {
    setIsTextAreaOpen(prev => !prev)
  }

  return (
    <>
      {label && (
        <label htmlFor={textareaId} className="_small">
          {label}
        </label>
      )}
      {toggleWithLabel && (
        <Button
          inline
          onClick={() => (isLabelOptional ? toggleTextArea() : "")}
          className={cl.toggle_textarea_btn}
        >
          {toggleWithLabel}
        </Button>
      )}

      <textarea
        placeholder={placeholder}
        name={`${name ?? textareaId}`}
        id={textareaId}
        rows={rows ?? 6}
        cols={cols}
        className={`_small ${cl.textarea} ${isTextAreaOpen ? cl.textarea_hidden : ""} ${className ? className : ""}`}
        onChange={onChange}
        {...props}
      ></textarea>
    </>
  )
}

export default Textarea
