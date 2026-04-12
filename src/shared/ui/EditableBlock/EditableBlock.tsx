import { Button, TextArea } from "@/shared"
import { SquarePen } from "lucide-react"
import { useEffect, useState, type FC } from "react"
import cl from "./EditableBlock.module.scss"

type EditableElements = HTMLTextAreaElement | HTMLInputElement

type ChangeHandlerWithId = (
  event: React.ChangeEvent<EditableElements>,
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
  isEditableInitial?: boolean
}

const EditableBlock: FC<EditableBlockProps> = ({
  trackedValue,
  onChange,
  resetValueOnDeps,
  className,
  isTextArea = false,
  name,
  elementId = null,
  isEditableInitial = false,
}) => {
  const [isEditable, setIsEditable] = useState(isEditableInitial)
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

  const toggleEditByKeyPress = (
    event: React.KeyboardEvent<EditableElements>,
  ) => {
    if (event.key === "Enter") {
      toggleEditMode()
    }
  }

  useEffect(() => {
    setIsEditable(isEditableInitial)
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
              onKeyDown={toggleEditByKeyPress}
              placeholder={value ? value : "title"}
            />
          ) : (
            <input
              name={name}
              value={value}
              className={cl.editable_value}
              onChange={changeValue}
              onKeyDown={toggleEditByKeyPress}
              placeholder={value ? value : "title"}
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
