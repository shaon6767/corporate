import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import RootLayout from "./components/RootLayout"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Error from "./pages/Error"

let router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/product" element={ <Products/> }></Route>
    <Route path="/product/:id" element={<ProductDetails/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
  </Route>
    <Route path="*" element={<Error />}></Route>
    </>
))

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
