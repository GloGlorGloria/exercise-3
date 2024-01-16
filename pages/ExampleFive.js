import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useEffect, useState } from "react"

export default function ExampleFive(){;
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);
    
        return() => clearInterval(interval);
    }, [count])


    //setup a counter
    //after every one second the number increases by 1
    //we want to display that number on screen as it increases
    //no button is needed it will update automatically



    return(
        <>
            <div>
                <h1>Number Counter</h1>
                <h3>Example using Interval</h3>
                <div>{count}</div>
                </div>
        </>
    )
}