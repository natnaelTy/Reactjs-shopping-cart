import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/CartSlice";


function CartTile({currentItem}){

    const dispatch = useDispatch();

    function handleRemoveFromCart(){
       dispatch(removeFromCart(currentItem.id));
    }
    return(
        <div>
            <div className="flex items-start border-[1.5px] border-gray-800 p-6 gap-4 rounded-md">
              <div key={currentItem.id} className="h-[100px] w-[100px] relative">
              <img src={currentItem.image} alt={currentItem.title} className="object-contain w-full h-full" />
             </div>
               <div className="flex flex-col gap-3 mt-2">
                    <h1 className="w-40 text-gray-700 truncate font-semibold">{currentItem.title}</h1>
                    <p>Price: ${currentItem.price}</p>
                   <button onClick={handleRemoveFromCart} className="bg-black px-4 py-2 rounded-md text-white">Remove from cart</button>
                </div>
              </div>
        </div>
    )
}

export default CartTile;