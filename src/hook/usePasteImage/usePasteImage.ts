import { useState } from 'react'

const usePasteImage = () => {
  const images = JSON.parse(
    localStorage.getItem('IMAGE_UNCATEGORIZED')
  ) as string[]

  const [uncategorizedImages, setUncategorizedImages] = useState<string[]>(
    images || []
  )

  const convertImageToBase64 = (image: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = () => resolve(reader.result as string)
      //   reader.onerror = (error) => reject(error)
    })
  }

  const getImageFromClipboard = async (evt: ClipboardEvent) => {
    const clipboardItems = evt.clipboardData.items
    const items = Array.from(clipboardItems).filter(
      (item: DataTransferItem) => {
        return /^image\//.test(item.type)
      }
    )
    debugger

    if (items.length === 0) {
      return
    }

    const item = items[0]
    const blob = item.getAsFile()

    const imageBase64: string = await convertImageToBase64(blob)

    setUncategorizedImages((oldUncategorizedImages: string[]) => {
      const newValue = [...oldUncategorizedImages, imageBase64]

      return newValue
    })
  }

  return { uncategorizedImages, getImageFromClipboard }
}

export default usePasteImage
