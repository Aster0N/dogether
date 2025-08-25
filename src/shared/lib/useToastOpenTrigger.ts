import { useEffect, useState } from "react"

interface UseToastOpenTrigger {
  (isOpenTrigger: boolean): { showToast: boolean; onToastClose: () => void }
}

export const useToastOpenTrigger: UseToastOpenTrigger = isOpenTrigger => {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    if (isOpenTrigger) {
      setShowToast(true)
    }
  }, [isOpenTrigger])

  const onToastClose = () => setShowToast(false)

  return { showToast, onToastClose }
}
