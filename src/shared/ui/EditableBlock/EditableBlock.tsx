import { Button } from "@/shared"
import { SquarePen } from "lucide-react"
import { useEffect, useState, type ChangeEvent, type FC } from "react"
import cl from "./EditableBlock.module.scss"

interface EditableBlockProps {
  trackedValue: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  resetValueOnDeps?: unknown[] // ? questionable solution
  className?: string
}

const EditableBlock: FC<EditableBlockProps> = ({
  trackedValue,
  onChange,
  resetValueOnDeps,
  className,
}) => {
  const [isEditable, setIsEditable] = useState(false)
  const [value, setValue] = useState("")

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange(e)
  }

  const toggleEditMode = () => {
    setIsEditable(prev => !prev)
    if (!value) {
      setValue(trackedValue)
    }
  }

  useEffect(() => {
    setIsEditable(false)
    setValue("")
  }, [...(resetValueOnDeps ?? [])])

  return (
    <div className={`${cl.editable_block_wrapper} _space-between`}>
      <div className={`${className ? className : ""}`}>
        {isEditable ? (
          <input
            name={trackedValue}
            value={value}
            className={cl.editable_value}
            onChange={changeValue}
            placeholder="type smth..."
          ></input>
        ) : (
          trackedValue
        )}
      </div>
      <Button inline dark onClick={toggleEditMode} className={cl.toggle_edit}>
        <SquarePen color="#20927b" size={18} />
      </Button>
    </div>
  )
}

export default EditableBlock
