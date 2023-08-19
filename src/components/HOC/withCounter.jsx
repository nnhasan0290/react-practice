import { useState } from "react"

const withCounter = (Component) => {
    return function NewComponent(){
        const [count, setCount] = useState(2);
        return(
            <Component count={count} setCount={setCount} />
        )
    }
}

export default withCounter;