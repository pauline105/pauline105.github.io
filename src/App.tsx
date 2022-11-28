import React, { FC } from "react"
import { Context, themes } from "./context/index"
import ForWardRefImg from "../src/assets/gif/forwardRef.gif"
import { Tabs } from "antd"
import { UnControlled as CodeMirror } from "react-codemirror2"
import Ww from "../src/component/Ww"
import "./index.scss"
const App: FC = (props) => {
  return (
    <>
      <Tabs
        defaultActiveKey='item-2'
        tabPosition={"left"}
        items={[
          {
            label: "前言",
            key: "item-1",
            children: "为了防止在react中,忘记怎么搭配ts使用, 在此做个笔记",
          },
          {
            label: "props",
            key: "item-2",
            children: (
              <div>
                父组件:{" "}
                <CodeMirror
                  value={`import React from 'react'
const App = ( ) => {
  return <Child message='我是父组件传过来的值'/>
}
export default App`}
                  options={{
                    mode: "javascript",
                    theme: "material",
                    lineNumbers: true,
                  }}
                />
                <br />
                子组件:
                <CodeMirror
                  value={`import React, { FC } from "react"
interface Props {
  message: string
}
const Child: FC<Props> = ( props ) => {
  return <div>{ props.message }</div>
}
export default Child`}
                  options={{
                    mode: "javascript",
                    theme: "material",
                    lineNumbers: true,
                  }}
                />
              </div>
            ),
          },

          {
            label: "useState",
            key: "item-3",
            children: (
              <CodeMirror
                value={`import React, { useState, FC } from 'react'
const App: FC = () => {
  const [count, setCountt] = useState<number>(0)
  return <div onClick={() => setCountt(count + 1)}>{count}</div>
}
export default App`}
                options={{
                  mode: "javascript",
                  theme: "material",
                  lineNumbers: true,
                }}
              />
            ),
          },
          {
            label: "forwardRef",
            key: "item-4",
            children: (
              <div>
                会创建一个React组件，这个组件能够将其接受的 ref
                属性转发到其组件树下的另一个组件中
                <br />
                子组件:
                <CodeMirror
                  value={`import React, { forwardRef, RefObject, ReactElement } from 'react'
const ForwardRef = forwardRef<
  HTMLButtonElement,
  {
    children: ReactElement
    ref: RefObject<HTMLButtonElement>
    onClick: () => void
    message: string
  }
>((props, ref) => (
  <>
  <div>
   <span>{props.message}</span>
   <button ref={ref} onClick={() => console.log('调用子组件的方法')}>
    {props.children}
   </button>
</div>
  </>
))
export default ForwardRef
                  `}
                  options={{
                    mode: "javascript",
                    theme: "material",
                    lineNumbers: true,
                  }}
                />
                父组件:
                <CodeMirror
                  value={`import { useRef } from 'react'
import ForwardRef from "./component/ForwardRef"
const App: FC = ( ) => {
const ref = useRef<HTMLButtonElement>(null)
  return (
    <button
      onClick={() => {
        if (ref.current !== null) {
        ref.current.click()
        }
      }}
    >
      我是父组件,我要调用子组件的方法
    </button>
  )
}
<ForwardRef message='我是一个msg' ref={ref}>
   <div> click me!</div>
</ForwardRef>`}
                  options={{
                    mode: "javascript",
                    theme: "material",
                    lineNumbers: true,
                  }}
                />
                效果如下:
                <br />
                <img src={ForWardRefImg} alt='' />
              </div>
            ),
          },
          {
            label: "useContext",
            key: "item-5",
            children: (
              <div>
                useContext: 跨级传送数据,不用props一层一层传递
                <br />
                首先创建一个context文件,数据从这里传出
                <CodeMirror
                  value={`import { createContext } from 'react'
interface Themes {
  foreground: String
  background: String
}
const themes = {
    foreground: '#000000',
    background: '#eeeeee',
}
export const Context = createContext<Themes>(themes)`}
                  options={{
                    mode: "javascript",
                    theme: "material",
                    lineNumbers: true,
                  }}
                />
                <br />
                一级组件:
                <CodeMirror
                  value={`import React, { FC } from "react"
import { Context, themes } from "./context/index"
const App = ( ) => {
  return (
    // 这里value是传递的数据
    <Context.Provider value={themes}>
      <Child></Child>
    </Context.Provider>
  )
}
export default App`}
                  options={{
                    mode: "javascript",
                    theme: "material",
                    lineNumbers: true,
                  }}
                />
                <br />
                二级组件:
                <CodeMirror
                  value={`import React, { FC } from "react"
const Child = ( ) => {
  return (
    // 三级组件
    <Son></Son>
  )
}
export default Child`}
                  options={{
                    mode: "javascript",
                    theme: "material",
                    lineNumbers: true,
                  }}
                />
                <br />
                三级组件:
                <CodeMirror
                  value={`import React, { useContext } from "react"
import { Context } from "../context"
const Son = ( ) => {
  const themes = useContext(Context)
  return (
    const themes = useContext(Context)
    return <div>{themes.foreground}</div>
  )
}
export default Son`}
                  options={{
                    mode: "javascript",
                    theme: "material",
                    lineNumbers: true,
                  }}
                />
              </div>
            ),
          },
        ]}
      ></Tabs>
    </>
  )
}

export default App
