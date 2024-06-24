import { useState } from "react";

const allBrands = [
    {id: "1", brandName: "puma"},
    {id: "2", brandName: "addidas"},
    {id: "3", brandName: "nike"},
    {id: "4", brandName: "reebok"},
    {id: "5", brandName: "fila"}
];

const BrandFilter = () => {
    // const [search, setSearch] = useState();
    const [brands, setBrands] = useState(allBrands);
    const [selectedBrand, setSelectedBrands] = useState([]);

    const onSearchChange = (e) => {
        const value = e.target.value;
        // setSearch(e.target.value);
        const filteredBrands = (value?.length > 0) ? 
                                    brands.filter(brand => brand.brandName.includes(value.toLowerCase())) : 
                                    allBrands;
        console.log(filteredBrands);
        setBrands(filteredBrands);
    }

    const onAddToCartClick = (id) => {
        const selectedItem = allBrands.find(item => item.id === id);
        setSelectedBrands([...selectedBrand, selectedItem]);
    }

    const  onRemoveClick = (id) => {
         
    }

    return (
        <>
            <input onChange={onSearchChange} placeholder="Search a Brand" />
            <ul>
                {
                    brands.map((brand) => 
                        <li key={brand.id}>
                            {brand.brandName}
                            <button onClick={() => onAddToCartClick(brand.id) }>Add To Cart</button>
                        </li>)
                }
            </ul>

            <div >
                <p>Your Cart</p>
                {
                    selectedBrand && selectedBrand.map(brand => 
                    <p key={brand.id}> {brand.brandName} - <button onClick={onRemoveClick}></button></p>)
                }
            </div>
        </>
        
    );
}

export default BrandFilter;