import { useEffect } from 'react';
import { addToCart, removeFromCart } from '../store/CartSlice';
import './style.css';
import {useDispatch, useSelector} from 'react-redux'

function ProductTile({products}){

    const dispatch = useDispatch();
    const {cart} = useSelector(state => state);

    function handleAddToCart(){
        dispatch(addToCart(products));
    }
    function handleRemoveFromCart(){
        dispatch(removeFromCart(products.id));
    }

    return(
        <div>
            <div className="border-[1.5px] border-gray-600 p-3 h-[330px] w-[250px] rounded-sm flex flex-col items-center justify-between">
               <div className="image-container">
                   <img src={products.image} alt={products.title} />
               </div>
               <div className='flex flex-col gap-3 items-center'>
                   <h1 className='text-lg w-40 truncate text-gray-700 font-semibold max-w-lg'>{products.title}</h1>
                   <p className='font-semibold'>Price: ${products.price}</p>
                   <button onClick={cart.some(items => items.id === products.id) ? handleRemoveFromCart : handleAddToCart } className='bg-black px-4 py-2 mx-auto rounded-md text-white'>{cart.some(items => items.id === products.id) ? 'Remove from cart' : 'Add to cart'}</button>
               </div>
            </div>
        </div>
    )
}

export default ProductTile;