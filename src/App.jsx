import React, { useState } from "react";
import C1 from './C1';

function App() {
    const [acKapa, acKapaDegistir] = useState(false);
    const [isim, isimDegistir] = useState("");
    // ...

    const sonraCalis = ()=>{
        console.log("Sonra çalış tekrar aktif oldu..");
        // bu kodlar render tamamen bittikten sonra çalışacak..
        setTimeout(()=>{
            let saniye = new Date().getSeconds();
            document.body.style.backgroundColor = saniye % 2 == 0 ? "red" : "blue";
        }, 3000);


        return ()=>{
            console.log("APP unmount oldu.")
        }
    }

    // React.useEffect(sonraCalis, []); // SADECE İLK RENDER SONRASINDA ÇALIŞIR
    // React.useEffect(sonraCalis, [isim]); // 2. parametrede belirtilen prop veya state güncellendiğinde callback çalışır

    React.useEffect(sonraCalis, [isim]);

    // ....

    // ...

    return (
        <div>
            App render edildi. {new Date().getSeconds()}

            {acKapa && <C1 />}
        </div>
    )
}

export default App;