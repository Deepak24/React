// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const Products = [{id: "1", item: "Shirt"},
                {id: "2", item:"Short"},
                {id: "3", item: "T-Shirt"}
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

function App() {
    // const [count, setCount] = useState(0)

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

            <Products />
            
        </>
    )
}

export default App;
