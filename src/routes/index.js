import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Carrinho from "../pages/Carrinho"
import Favoritos from "../pages/Favoritos"
import { Product } from "../pages/Product"

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/produtos/:id" element={<Product/>}/>
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
    )
}