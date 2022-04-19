const Home = () => {

    const handleClick = (e) =>{
        console.log('i have been clicked', e);
    }
    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click ME</button>
            <button onClick={(e) => handleClickAgain('james', e.target)}>Click Me Again</button>
        </div>
    );
}

export default Home;