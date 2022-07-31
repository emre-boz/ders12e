import { useEffect } from "react";

function C1() {

    useEffect(()=>{
        console.log("C1 useEffect çalıştı..");

        return ()=>{ 
            console.log("C1 tarayıcıdan kaldırıldı.");
            document.body.style.background = "white";
        }
    });

    return (
        <p>
            Ben C1!
        </p>
    );
}

export default C1;