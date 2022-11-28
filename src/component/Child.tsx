import React, { FC, useContext, useRef } from "react"
import { Context } from "../context"
import ForwardRef from "./ForwardRef"
const Child: FC = (props) => {
  const light = useContext(Context)
  const ref = useRef<HTMLButtonElement>(null)
  return (
    <>
      <div
        onClick={() => {
          if (ref.current !== null) {
            ref.current.click()
          }
        }}
      >
        {light.background}
      </div>

      <hr />

      <ForwardRef msg='我是一个msg' ref={ref} onClick={() => console.log(123)}>
        <div>click me!</div>
      </ForwardRef>
    </>
  )
}

export default Child
