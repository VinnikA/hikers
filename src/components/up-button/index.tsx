import { useState } from "react"
import { CgChevronDoubleUp } from "react-icons/cg"

export const UpButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scroll = document.documentElement.scrollTop
    if(scroll > 140) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <>
      {visible && 
        <button 
          onClick={scrollToTop}
          className=" bg-zinc-200 pt-1 bg-opacity-70 fixed right-2 md:right-6 bottom-2 md:bottom-4 text-zinc-800 hover:bg-opacity-100">
          <CgChevronDoubleUp className="w-10 h-10 animate-bounce" />
        </button>
      }
    </>

  )
}
