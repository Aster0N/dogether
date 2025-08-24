import { sleep } from "@/shared/lib/sleep"
import { useEffect, useState, type FC } from "react"
import cl from "./Toast.module.scss"

interface Toast {
  isSuccessCode: boolean
  onClose: () => void
  messages: {
    valid: string
    invalid: string
  }
}

const Toast: FC<Toast> = ({ isSuccessCode, messages, onClose }) => {
  const [isExpired, setIsExpired] = useState(false)
  const lifeTime = 3000

  const toastExpiration = async () => {
    if (!isExpired) {
      await sleep(lifeTime)
      setIsExpired(true)
      onClose()
    }
  }

  const closeToastEarlier = () => {
    setIsExpired(true)
    onClose()
  }

  useEffect(() => {
    toastExpiration()
  }, [])

  if (isExpired) {
    return null
  }

  return (
    <div className={cl.toast} onClick={closeToastEarlier}>
      {isSuccessCode ? messages.valid : messages.invalid}
    </div>
  )
}

export default Toast
