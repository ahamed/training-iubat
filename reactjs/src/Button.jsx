import { useState } from "react"

export default function Button(props) {
    const [count, setCount] = useState(0);
    
    return <div>
        <button type={props.type} onClick={() => {
            setCount(count + 1);
        }}>{props.children}</button>
    </div>
}