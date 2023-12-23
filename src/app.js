
import express from "express"
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js"
import { ProductManager } from "./ProductsManager.js";
import { CartManager } from "./cartManager.js";


export const productManager = new ProductManager()
export const cartManager = new CartManager()


const PORT= 8083;
const app= express();


app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use("/api/products",productsRouter);
app.use("/api/carts", cartsRouter )


app.listen(PORT,()=>{
        console.log( ` Escuchando en el puerto ${PORT}`);
})