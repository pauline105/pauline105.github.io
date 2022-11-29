import React, { FC, useReducer } from "react"
import reducer from "../reducer"

const Ww: FC = () => {
  // reducer是 纯函数  第二个参数是默认值
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <div>
      {state.count}
      <div onClick={() => dispatch({ type: "increment", payload: 1 })}>
        点我+1
      </div>
      <div onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        点我-1
      </div>
    </div>
  )
}
export default Ww
