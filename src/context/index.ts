import { createContext } from "react"
interface Themes {
  foreground: String
  background: String
}
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
}
export const Context = createContext<Themes>(themes.light)
