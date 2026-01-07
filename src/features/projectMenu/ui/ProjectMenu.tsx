import { Button } from "@/shared"
import { Plus } from "lucide-react"
import cl from "./ProjectMenu.module.scss"

const CreateProjectMenu = () => {
  return (
    <div>
      <Button dark className={cl.menu_btn}>
        <div className={`_small ${cl.menu_btn_content}`}>
          <span>new project</span>
          <Plus color="#20927b" strokeWidth={2} />
        </div>
      </Button>
    </div>
  )
}

export default CreateProjectMenu
