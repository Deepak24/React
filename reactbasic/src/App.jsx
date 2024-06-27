import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import Products from "./components/Products";
import IncrementButton from "./components/IncrementButton";
import DecrementButton from "./components/DecrementButton";
import ObjectUdateWithuseState from "./components/ObjectUpdateWithUseState1";
import BrandFilter from "./components/BrandFilter";

const isLoading = false;

function Loader() {
    return (
        <h3>Loading...</h3>
    );
}

function App() {

    const [count, setCount] = useState(0);

    const onSearchChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <>
            <Header />
            <h2>Hello Welcome to React!!</h2>
            
            <div >
                <div >Increment and Decrement </div>
                <IncrementButton count={count} setCount={setCount} name="Increse" />
                <span className=''>counter components value : {count}</span>
                <DecrementButton count ={count} setCount={setCount} name="Decrease" />
            </div>
            {//Conditional rendering
                isLoading ? <h3>Page Loaded.</h3> : <Loader /> 
            }

            <Products />
            <BrandFilter />
            
            <ObjectUdateWithuseState />
            <br />
            <input type="text" onChange={onSearchChange} placeholder='Search...' />
            <br />
        </>
    )
}

export default App;
