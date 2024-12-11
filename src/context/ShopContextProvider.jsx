import { createContext } from "react"

const ShopContext = createContext(null)   

export default function ShopContextProvider(props) {
  const contextValue={allProducts};
  return (
    
    <ShopContext.Provider >
      {props.children}
    </ShopContext.Provider>
  )
}
