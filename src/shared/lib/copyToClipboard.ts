type CopyToClipboardProps =
  | { value: string; htmlElement?: HTMLElement | null }
  | { value?: string; htmlElement: HTMLElement | null }
  | { value: string; htmlElement: HTMLElement | null }

interface CopyToClipboard {
  ({ value, htmlElement }: CopyToClipboardProps): Promise<boolean | undefined>
}

export const copyToClipboard: CopyToClipboard = async ({
  value,
  htmlElement,
}) => {
  let isCopied = false
  if (!htmlElement) {
    if (!value) {
      return
    }
    try {
      await navigator.clipboard.writeText(value)
      isCopied = true
    } catch (err) {
      console.error("clipboard copy error", err)
    }
    return isCopied
  }
  const text = htmlElement.innerText
  try {
    await navigator.clipboard.writeText(text)
    isCopied = true
  } catch (err) {
    console.error("clipboard copy error", err)
  }
  return isCopied
}
