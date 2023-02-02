import remove from '../assets/img/remove.svg'
import cartProduct from '../assets/img/cart-product.svg'

function productOnCart() {
    return (
        <div>
            <img src={cartProduct} alt="" />
            <div>
                <h4></h4>
                <h5></h5>
                <div>
                    <img src={remove} alt="" />
                    <h6>Remove</h6>
                </div>
            </div>
            <div>
                <h2>
                    $
                </h2>
                <h2>
                    Total: $
                </h2>
            </div>
        </div>
    )
}

export default productOnCart