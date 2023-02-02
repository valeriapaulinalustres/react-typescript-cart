import ProductsOnSaleContainer from "./ProductsOnSaleContainer"
import ProductsOnCartContainer from "./ProductsOnCartContainer"
import Summary from './Summary'

function Cart() {

  interface productsOnCartInterface {
    id: number,
    img: string,
    name: string,
    quantity: number,
    featuresOne: string,
    featuresTwo: string,
    featuresThree: string,
    featuresOneOption: string,
    featuresTwoOption: string,
    featuresThreeOption: string,
    minPrice: number,
    maxPrice: number,

  }

  const products: Array<productsOnCartInterface> = [
    {
      id: 1,
      img: "",
      name: "My Christmas Pack",
      quantity: 0,
      featuresOne: "CardBoard Box",
      featuresTwo: "Unisex Short Sleeve T-Shirt",
      featuresThree: "Bassic Bottle",
      featuresOneOption: "(container)",
      featuresTwoOption: "(Green, Small)",
      featuresThreeOption: "(Blue)",
      minPrice: 71.20,
      maxPrice: 80,
    },
    {
      id: 1,
      img: "",
      name: "Basic T-Shirt",
      quantity: 0,
      featuresOne: "CardBoard Box",
      featuresTwo: "Unisex Short Sleeve T-Shirt",
      featuresThree: "Bassic Bottle",
      featuresOneOption: "(container)",
      featuresTwoOption: "(Green, Small)",
      featuresThreeOption: "(Blue)",
      minPrice: 71.20,
      maxPrice: 80,
    },
    {
      id: 1,
      img: "",
      name: "Woman Bottle",
      quantity: 0,
      featuresOne: "CardBoard Box",
      featuresTwo: "Unisex Short Sleeve T-Shirt",
      featuresThree: "Bassic Bottle",
      featuresOneOption: "(container)",
      featuresTwoOption: "(Green, Small)",
      featuresThreeOption: "(Blue)",
      minPrice: 71.20,
      maxPrice: 80,
    }
  ]

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