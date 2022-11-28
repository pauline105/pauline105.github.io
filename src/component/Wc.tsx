import React, { FC } from "react"
interface Props {
  message: string
}
const Wc: FC<Props> = (props) => {
  return <div>{props.message}</div>
}

export default Wc
