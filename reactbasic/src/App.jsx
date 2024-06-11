// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const Products = [{id: "1", item: "Shirt"},
                {id: "2", item:"Short"},
                {id: "3", item: "T-Shirt"},
                {id: "4", item: "Jeans"},
                {id: "5", item: "Formal-Pant"}
];

const strElement = <h3>We are displaying Element</h3>;

function Header() {
    return (
        <div style={{ backgroundColor: 'gray', display: 'flex', flex: '1 0 auto' }}> 
            <h2>Shopify App</h2>
            <ul style={{ display: 'flex', flex: '1 0 auto'}}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

function MyButton() {
    return (
        <>
            <p>My Function component</p>
            <button className=''>Submit</button>
        </>
    );
}

function Loader() {
    return (
        <h3>Loading...</h3>
    );
}

const isLoading = false;
let count = 0;

function App() {
    // const [count, setCount] = useState(0)
    const onIncrementClick = () => {
        count = count + 1;
        console.log(count);
    }

    const onSearchChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <>
            <Header />
            <h2>Hello Welcome to React!!</h2>
            {
                strElement
            }
            <MyButton />

            {//Conditional rendering
                isLoading ? <h3>Page Loaded.</h3> : <Loader /> 
            }

            <ul>
            {//Product displaying 
                Products.map( product => 
                    <li className={`${product.id % 2 === 0 ? 'bgColor' : '' } padd8`} key={product.id} >{product.item}</li>
                )
            }
            </ul>
           
            <input type="text" onChange={onSearchChange} placeholder='Search...' />
            <button onClick ={onIncrementClick}>Button Increment</button>
        </>
    )
}

export default App;
