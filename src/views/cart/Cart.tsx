import ProductsOnSaleContainer from "./ProductsOnSaleContainer"
import ProductsOnCartContainer from "./ProductsOnCartContainer"
import Summary from './Summary'

function Cart() {
  return (
    <div>
      <div>
        <ProductsOnCartContainer />
        <Summary />
      </div>
      <ProductsOnSaleContainer />
    </div>

  )
}

export default Cart