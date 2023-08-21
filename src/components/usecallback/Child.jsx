import { memo } from "react"

const Child = ({todos, addTodo}) => {
    console.log("child")
    return(
        <div>
           {
            todos.map((todo, i) => (
                <li key={i}>
                    {todo}
                </li>
            ))
           }
           <button onClick={addTodo}>Add new</button>
        </div>
    )
}

export default memo(Child)