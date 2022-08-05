import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Home(){
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>Hello {counter}</h1>
            <style jsx global>{`
                a{
                    color:white;
                }
            `}</style>
        </div>
    )
}
