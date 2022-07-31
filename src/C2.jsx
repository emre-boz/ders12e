import {memo} from 'react';

function C2(ozellikler){
const adSoyad=ozellikler.isim+" "+ozellikler.soyisim;
console.log("C2 çalıştı");
    return (
    <>
        <p>Ben C2, Ad Soyad: {adSoyad}</p>
    </>
    );
}

export default memo(C2);