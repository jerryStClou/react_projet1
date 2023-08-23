export default function Todos({tasks})
{
    return(
    <div>
       <ul>
        
       {tasks.map((task) =>{
                    return <li style={{ color: task.isDone ? "green" : "red" }}>{task.title}</li>
                })}
       </ul>
    </div>
        ) 

}