import {memo} from "react";

function C3(ozellikler) {
    
    console.log("C3 çalıştı..");

    return (
        <>
            <p>Ben C3</p>

            {ozellikler.children}
        </>
    );
}

export default memo(C3);