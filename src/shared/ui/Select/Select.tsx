import { ChevronDown } from "lucide-react"
import { useId, type FC } from "react"
import cl from "./Select.module.scss"

interface Select {
  label?: string
  valueLabel?: string
  options: string[]
  className?: string
}

const Select: FC<Select> = ({ label, valueLabel, options, className }) => {
  const selectId = useId()

  return (
    <div className={cl.select_wrapper}>
      {label && <label htmlFor={selectId}>{label}</label>}
      <select
        name={`select-${selectId}`}
        defaultValue="disabled"
        className={`${cl.select} ${className}`}
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
