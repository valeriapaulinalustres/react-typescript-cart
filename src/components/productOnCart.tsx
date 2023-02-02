import remove from '../assets/img/remove.svg'
import cartProduct from '../assets/img/cart-product.svg'
import {useEffect} from 'react'

type ProductsOnCartArgs = {
    img: string,
    name: string,
    minPrice: number,
    maxPrice: number,
    minimun: number,
    quantity: number
}

function ProductOnCart({ img, name, minPrice, quantity}: ProductsOnCartArgs) {


    const numbersSelect:number[] = [1, 2, 3, 4, 5];

    // const forQuantity = () =>{
   
    //     for (let i = 1; i < quantity ; i++) {
    //         numbersSelect.push(i)  
    //         console.log(i)  
    //         console.log(quantity) 
    //       } 
        
    // }
    // useEffect(() => {
    //     forQuantity()
    
    // }, [])
    


    const listItems:any = numbersSelect.map((number, index) =>
    <option value={number} key={index}>{number}</option>
    );
    
  


    return (
        <div>
            <img src={img} alt={name} />
            <div>
                <h4>{name}</h4>
                <div>
                    <label>Quantity:</label>
                    <select name="quantity">
                       {listItems}                   
                    </select>
                </div>
                <div>
                    <img src={remove} alt="delete icon" />
                    <h6>Remove</h6>
                </div>
            </div>
            <div>
                <h2>
                    $ {minPrice}
                </h2>
                <h2>
                    Total: $
                </h2>
            </div>
        </div>
    )
}

export default ProductOnCart