function C4({isim}){
    console.log("C4 çalıştı");
    return (
    <>
        <p>Ben C4, isim={isim}</p>
        <p>{new Date().getSeconds()}</p>
    </>
    );
}

export default C4;