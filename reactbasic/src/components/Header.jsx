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

export default Header;