import React, { useRef } from "react"

const Wc = () => {
  const ref = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  return (
    <>
      <div
        ref={ref}
        onClick={() => {
          if (btnRef.current != null) {
            btnRef.current.click()
          }
        }}
      >
        ww
      </div>
      <button ref={btnRef} onClick={() => console.log(btnRef.current)}>
        click me
      </button>
    </>
  )
}

export default Wc
