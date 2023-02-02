import ProductOnCart from '../../components/ProductOnCart'
import cartProduct from '../../assets/img/cartProduct.svg'

function ProductsOnCartList() {

    
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
    minimun: number,
  }

  const products: Array<productsOnCartInterface> = [
    {
      id: 1,
      img: cartProduct,
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
      minimun: 50
    },
    {
      id: 1,
      img: cartProduct,
      name: "Basic T-Shirt",
      quantity: 0,
      featuresOne: "CardBoard Box",
      featuresTwo: "Unisex Short Sleeve T-Shirt",
      featuresThree: "Bassic Bottle",
      featuresOneOption: "(container)",
      featuresTwoOption: "(Green, Small)",
      featuresThreeOption: "(Blue)",
      minPrice: 13.50,
      maxPrice: 80,
      minimun: 10
    },
    {
      id: 1,
      img: cartProduct,
      name: "Woman Bottle",
      quantity: 0,
      featuresOne: "CardBoard Box",
      featuresTwo: "Unisex Short Sleeve T-Shirt",
      featuresThree: "Bassic Bottle",
      featuresOneOption: "(container)",
      featuresTwoOption: "(Green, Small)",
      featuresThreeOption: "(Blue)",
      minPrice: 36.50,
      maxPrice: 80,
      minimun: 20
    }
  ]

  return (
    <div>
        {products.map((item, index) => (
        <ProductOnCart 
        key={index} 
        name={item.name} 
        minPrice={item.minPrice} 
        maxPrice={item.maxPrice}
        img={item.img} 
        minimun={item.minimun} 
        quantity={item.quantity}
        />
    ))}
    </div>
  )
}

export default ProductsOnCartList