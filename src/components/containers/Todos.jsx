export default function Todos({tasks})
{
    return(
    <div>
       <ul>
        
       {tasks.map((task, position) =>{
                    return <li key={position} style={{ color: task.isDone ? "green" : "red" }}>{task.title}</li>
                })}
       </ul>
    </div>
        ) 

}