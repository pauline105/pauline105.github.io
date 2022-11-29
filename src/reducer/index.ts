interface Tstate {
  count: number
}
type TAction = {
  type: "increment" | "decrement"
  payload?: number
}
const reducer = (state: Tstate, action: TAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload! }
    case "decrement":
      return { count: state.count - 1 }
  }
}

export default reducer
