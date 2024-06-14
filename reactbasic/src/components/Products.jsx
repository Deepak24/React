const objProducts = [{id: "1", item: "Shirt"},
    {id: "2", item:"Short"},
    {id: "3", item: "T-Shirt"},
    {id: "4", item: "Jeans"},
    {id: "5", item: "Formal-Pant"}
];

function Products() {
    return (
        <ul>
            {//Product displaying 
                objProducts.map( product => 
                    <li className={`${product.id % 2 === 0 ? 'bgColor' : '' } padd8`} 
                        key={product.id} >
                            {product.item}
                    </li>
                )
            }
        </ul>
    )
}

export default Products;
