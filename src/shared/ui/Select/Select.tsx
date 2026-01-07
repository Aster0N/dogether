import type { User } from "@/entities/user"
import { ChevronDown } from "lucide-react"
import { useId, type FC } from "react"
import cl from "./Select.module.scss"

interface Select {
  name: string
  label?: string
  valueLabel?: string
  options: User["sex"][]
  className?: string
  value?: string
  onChange: (value: string) => void
}

const Select: FC<Select> = ({
  name,
  label,
  valueLabel,
  options,
  className,
  value,
  onChange,
}) => {
  const selectId = useId()

  const handleSelectValueChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onChange(event.target.value)
  }

  return (
    <div className={cl.select_wrapper}>
      {label && <label htmlFor={selectId}>{label}</label>}
      <select
        name={name}
        defaultValue={value || "disabled"}
        className={`${cl.select} ${className}`}
        onChange={handleSelectValueChange}
      >
        {valueLabel && (
          <option value="disabled" disabled hidden className={cl.base_option}>
            {valueLabel}
          </option>
        )}
        {options.map(option => (
          <option key={option} value={option} className={cl.option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown size={18} color="#20927b" className={cl.arrow} />
    </div>
  )
}

export default Select
