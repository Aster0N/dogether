import { Button, TextArea } from "@/shared"
import { SquarePen } from "lucide-react"
import { useEffect, useState, type FC } from "react"
import cl from "./EditableBlock.module.scss"

// type ChangeHandler = ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>

type ChangeHandlerWithId = (
  event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  elementId?: string,
) => void

interface EditableBlockProps {
  trackedValue: string
  onChange: ChangeHandlerWithId
  name: string
  resetValueOnDeps?: unknown[] // ? questionable solution
  className?: string
  isTextArea?: boolean
  elementId?: string
}

const EditableBlock: FC<EditableBlockProps> = ({
  trackedValue,
  onChange,
  resetValueOnDeps,
  className,
  isTextArea = false,
  name,
  elementId = null,
}) => {
  const [isEditable, setIsEditable] = useState(false)
  const [value, setValue] = useState("")

  const changeValue: ChangeHandlerWithId = e => {
    setValue(e.target.value)
    elementId ? onChange(e, elementId) : onChange(e)
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
      <div
        className={`${className ? className : ""}`}
        onDoubleClick={toggleEditMode}
      >
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
