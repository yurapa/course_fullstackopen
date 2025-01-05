import { useState } from 'react'

import Statistics from "./components/Statistics";
import Button from "./components/Button";

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const feedbackStatistics = good + neutral + bad > 0
        ? <Statistics good={good} neutral={neutral} bad={bad} />
        : <p>No feedback given</p>;

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={() => setGood(good + 1)}>good</Button>
            <Button onClick={() => setNeutral(neutral + 1)}>neutral</Button>
            <Button onClick={() => setBad(bad + 1)}>bad</Button>
            <h2>statistics</h2>
            {feedbackStatistics}
        </div>
    )
}

export default App