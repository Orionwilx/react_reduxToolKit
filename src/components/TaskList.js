import{ useSelector } from 'react-redux'
const TaskList = () => {

    const stateTask = useSelector(state => state.task)
    console.log(stateTask)
    return (
        <div>
            {stateTask.map(stateTask => (
                <div key={stateTask.id} >
                    <h3>{stateTask.title}</h3>
                    <p>{stateTask.description}</p>
                </div>
            ))}
        </div>
    );
}

export default TaskList;
