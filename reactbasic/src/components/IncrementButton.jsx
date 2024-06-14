const IncrementButton = (props) => {

    const { count, setCount, name } = props;

    const onIncrementClick = () => {
        setCount(count + 1);
        console.log(name);
    }

    return (
        <>
            <button onClick={onIncrementClick}>Increment ++ </button>
        </>
    )
}

export default IncrementButton;