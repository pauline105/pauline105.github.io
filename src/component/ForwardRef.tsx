import React, { forwardRef, RefObject, ReactElement } from "react"

const ForwardRef = forwardRef<
  HTMLButtonElement,
  {
    children: ReactElement
    ref: RefObject<HTMLButtonElement>
    onClick: () => void
    msg: string
  }
>((props, ref) => (
  <>
    {props.msg}
    <button type='button' ref={ref} onClick={() => console.log(111)}>
      {props.children}
    </button>
  </>
))

export default ForwardRef
