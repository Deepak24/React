const DecrementButton = (props) => {

    const {count, setCount, name } = props;

    const onDecrementClick = () => {
        if( count <= 0 ) return;
        setCount(count - 1);
    }

    return (
        <>
            <button onClick={onDecrementClick}>Decrement -- </button>
        </>
    )
}

export default DecrementButton;