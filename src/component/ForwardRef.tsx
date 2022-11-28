import React, { forwardRef, RefObject, ReactElement } from "react"

const ForwardRef = forwardRef<
  HTMLButtonElement,
  {
    children: ReactElement
    ref: RefObject<HTMLButtonElement>
    message: string
  }
>((props, ref) => (
  <div>
    <span>{props.message}</span>
    <button ref={ref} onClick={() => console.log("调用子组件的方法")}>
      {props.children}
    </button>
  </div>
))

export default ForwardRef
