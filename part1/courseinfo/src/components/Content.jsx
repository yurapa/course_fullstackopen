import Part from './Part';

const Content = ({parts}) => (
    <div>
        {parts.map((part, index) => <Part key={index} name={part.name} exercises={part.exercises}/>)}
    </div>
)

export default Content;