import { useState } from "react";

const allBrands = [
    {id: "1", brandName: "Puma"},
    {id: "2", brandName: "Addidas"},
    {id: "3", brandName: "Nike"},
    {id: "4", brandName: "Reebok"},
    {id: "5", brandName: "Fila"}
];

const BrandFilter = () => {

    const [search, setSearch] = useState();
    const [brands, setBrands] = useState(allBrands);

    const onSearchChange = (e) => {
        setSearch(e.target.value);
        const filteredBrands = brands.filter(brand => brand.brandName.includes(search?.toLowerCase()));
        console.log(filteredBrands)
        setBrands(filteredBrands);
    }

    return (
        <>
            <input onChange={onSearchChange} placeholder="Search a Brand" />
            <ul>
                {
                    brands.map(brand => <li key={brand.id}>{brand.brandName}</li>)
                }
            </ul>
        </>
        
    );
}

export default BrandFilter;