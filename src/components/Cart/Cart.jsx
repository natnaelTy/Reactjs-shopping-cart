import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router"
import CartTile from "./CartTile";
function Cart(){

    const {cart} = useSelector(state => state);
    const [totalCart, setTotalCart] = useState(0);

    useEffect(() => {
        setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
    },[cart]);

    console.log(cart, totalCart);
    return(
        <div className="p-4 relative">
            <div className="flex items-start justify-center flex-col w-full gap-8 p-4 mt-10">
              {
                cart && cart.length ? 
                cart.map(item => (
                    <CartTile currentItem={item}/>
                ))
                : 
                <div className="flex items-center justify-center flex-col gap-6 mx-auto">
                     <h1 className="text-xl font-semibold">Your cart is empty.</h1>
                    <Link to={'/'}><button className="bg-black px-4 py-2 rounded-md text-white">Shop Now</button></Link> 
                </div>
              }
            </div>
            <div className="bg-gray-100 max-w-[450px] font-semibold flex flex-col gap-3 p-4 rounded-md mb-6 absolute left-8">
                <h1 className="text-xl font-semibold text-red-600">Your cart summary</h1>
                <p>Total Item: {cart.length}</p>
                <p>Total Amount: <span className="text-green-500">${totalCart.toFixed(2)}</span></p>
            </div>
        </div>
    )
}

export default Cart;