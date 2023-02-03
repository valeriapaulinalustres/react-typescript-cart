import Box from '@mui/material/Box';

type ProductsArgs = {
    img: string,
    name: string,
    minPrice: number,
    maxPrice: number,
    minimun: number
}

function ProductOnSale({ img, name, minPrice, maxPrice, minimun }: ProductsArgs) {
    return (
        <Box
        sx={{
            margin:"10px"
        }}
        >
            <img src={img} alt={name}/>
            <h4>
                {name}
            </h4>
            <Box
            sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center'
            }}
            >
                <h5>
                    $ {minPrice} - $ {maxPrice}
                </h5>
                <h6>
                    Minimun {minimun}
                </h6>
            </Box>
        </Box>
    )
}

export default ProductOnSale


