import {NavLink} from 'react-router';
import { BsCart4 } from "react-icons/bs";
import { useSelector } from 'react-redux';

function NavBar(){

    const {cart} = useSelector(state => state);
    return(
        <div>
             <nav className='flex items-center justify-between px-10 py-4'>
                <h1 className='text-2xl font-semibold text-blue-600'>Redux Shopping cart</h1>
                <div>
                    <ul className='flex gap-6 items-center '>
                        <NavLink to={'/'}>Home</NavLink>
                        <div className='relative p-4'>
                            <NavLink to={'/cart'}><BsCart4 className='text-2xl'/></NavLink>
                            <div className={cart.length === 0 ? 'hidden' : 'bg-red-600 text-white rounded-full p-1 text-xs absolute top-0 right-5'}>{cart.length}</div>
                        </div>
                    </ul>
                </div>
             </nav>
        </div>
    )
}

export default NavBar;