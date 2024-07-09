import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(10)

    const decrease = () => {
        setCount(count - 1)
    }
    const increase = () => {
        setCount(count + 1)
    }
    
    return (
        <>
            <h1>Counter</h1>
            <button onClick={() => { setCount(count - 1) }}>-</button>
            <span>Count is {count}</span>
            <button onClick={increase}>+</button> <br />

            <button onClick={decrease}>-</button>
            <span>Count is {count}</span>
            <button onClick={increase}>+</button> <br />
            
            <button onClick={decrease}>-</button>
            <span>Count is {count}</span>
            <button onClick={increase}>+</button> <br />

        </>
    )
}


export default Counter