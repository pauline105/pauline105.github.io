import { createContext } from "react"
interface Themes {
  foreground: String
  background: String
}
export const themes = {
    foreground: "#000000",
    background: "#eeeeee",
}
export const Context = createContext<Themes>(themes)
