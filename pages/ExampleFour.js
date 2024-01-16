import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState, useEffect } from "react"

export default function ExampleFour(){
    //var [text, setText] = useState("");
    //number is a variable on the left side that is used to display or grab value fom useState
    //setNumber is used to update the useState
    var [text, setText] = useState(""); 
    
    const [number, setNumber] = useState(0); //initially start as the number 0

    const [color, setColor] = useState("gray"); //defaults as string of gray 

    const [trigger, setTrigger] = useState(false); //defaults as boolean false
    
    const HandleChange = () => {
        if(number > 2) {
            setColor("orange");
        }
        console.log(number);
    }

    useEffect(() => {
        var interval;

        //trigger is already a boolean. trigger is true already, no need to == true
        //if true, then delay 3 seconds
        if(trigger){
            interval = setInterval(() => {
                HandleChange();
                setTrigger(false);
            }, 3000) //after 3 seconds then it will do the console log below
        }

        console.log(number);
        console.log(trigger);
        return () => clearInterval(interval);
    }, [trigger])

    return(
        <>
        <Header/>
        <main>
            <button onClick={() => {
                setNumber(number + 1);
                setTrigger(true);
            }}>Add Number</button>
            <h1 style={{color:color}}>Changing the text color</h1>

            {
                number > 1 && <div style={{
                    backgroundColor: `${color}`,
                    //backgroundColor: color -- also okay.
                    lineHeight: 10,
                    padding: 20
                }}>
                    Box
                </div>
            }
        </main>
        <Footer/>
        </>
    )
}