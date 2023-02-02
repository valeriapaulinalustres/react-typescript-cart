type ProductsArgs = {
    img: string,
    name: string,
    minPrice: number,
    maxPrice: number,
    minimun: number
}

function ProductOnSale({ img, name, minPrice, maxPrice, minimun }: ProductsArgs) {
    return (
        <div>
            <img src={img} alt={name}/>
            <h4>
                {name}
            </h4>
            <div>
                <h5>
                    $ {minPrice} - $ {maxPrice}
                </h5>
                <h6>
                    Minimun {minimun}
                </h6>
            </div>
        </div>
    )
}

export default ProductOnSale


