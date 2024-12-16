import { useEffect, useState } from "react";
import ProductTile from "./ProductTile";
import {BeatLoader} from 'react-spinners'
function Home(){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    async function fetchFakeData(){
        try{
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products`);
            const data = await response.json();
    
            if(data){
              setProducts(data);
            }
        }catch(error){
            setErrorMsg("Products not found");
            console.error(error);
            setLoading(false);
        }

    }

    console.log(products);
    useEffect(() => {
       fetchFakeData();
    },[]);

    return(
        <div>
            <div className="flex flex-wrap items-center justify-center h-screen gap-8 p-3">
                {products && products.length > 0 ?
                 products.map((items) => (
                     <ProductTile products={items}/>
                 ))
                 : <div><BeatLoader color="#007fff" /></div>}
            </div>
        </div>
    )
}

export default Home;