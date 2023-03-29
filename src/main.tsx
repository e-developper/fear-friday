import { useEffect } from 'react'
import styled from 'styled-components'

import usePasteImage from './hook/usePasteImage/usePasteImage'

const Main = () => {
  const { uncategorizedImages, getImageFromClipboard } = usePasteImage()

  useEffect(() => {
    window.addEventListener('paste', getImageFromClipboard)

    return () => {
      window.removeEventListener('paste', getImageFromClipboard)
    }
  })

  useEffect(() => {
    console.log(uncategorizedImages)
    localStorage.setItem(
      'IMAGE_UNCATEGORIZED',
      JSON.stringify(uncategorizedImages)
    )
  }, [uncategorizedImages])

  return (
    <>
      <span>test</span>
      {uncategorizedImages.map((image: string) => {
        return <img src={image} />
      })}
    </>
  )
}

export default Main
