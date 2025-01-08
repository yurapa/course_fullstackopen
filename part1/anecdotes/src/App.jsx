import { useEffect, useState } from 'react';

const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
];

const App = () => {
    const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
    const [selected, setSelected] = useState(0);
    const [best, setBest] = useState(null);
    const [isFirstRender, setIsFirstRender] = useState(true);

    const handleChange = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length));
    };

    const handleVote = () => {
        setPoints([...points].map((point, index) => (index === selected ? point + 1 : point)));
    };

    useEffect(() => {
        const bestIndex = points.indexOf(Math.max(...points));
        setBest(bestIndex);

        // After the first render, set isFirstRender to false
        if (isFirstRender) {
            setIsFirstRender(false);
        }

        console.log('useEffect')
    }, [points]);

    return (
        <div>
            <h1>Anecdote of the day</h1>
            {anecdotes[selected]}
            <p>has {points[selected]} votes</p>
            <br />
            <button onClick={handleVote}>vote</button>
            <button onClick={handleChange}>Next anecdote</button>
            { !isFirstRender && best !== null &&  (
                <div>
                    <h2>Anecdote with most votes:</h2>
                    <p>{anecdotes[best]}</p>
                    <p>has {points[best]} votes</p>
                </div>
            )}
        </div>
    );
};

export default App;