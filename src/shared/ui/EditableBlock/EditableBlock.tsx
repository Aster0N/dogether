import { Button, TextArea } from "@/shared"
import { SquarePen } from "lucide-react"
import { useEffect, useState, type ChangeEventHandler, type FC } from "react"
import cl from "./EditableBlock.module.scss"

type ChangeHandler = ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>

interface EditableBlockProps {
  trackedValue: string
  onChange: ChangeHandler
  resetValueOnDeps?: unknown[] // ? questionable solution
  className?: string
  isTextArea?: boolean
  name: string
}

const EditableBlock: FC<EditableBlockProps> = ({
  trackedValue,
  onChange,
  resetValueOnDeps,
  className,
  isTextArea = false,
  name,
}) => {
  const [isEditable, setIsEditable] = useState(false)
  const [value, setValue] = useState("")

  const changeValue: ChangeHandler = e => {
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
          isTextArea ? (
            <TextArea
              name={name}
              value={value}
              className={cl.editable_value}
              onChange={changeValue}
              placeholder="type smth..."
            />
          ) : (
            <input
              name={name}
              value={value}
              className={cl.editable_value}
              onChange={changeValue}
              placeholder="type smth..."
            ></input>
          )
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
