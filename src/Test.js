import { useEffect, useState } from "react";
import React from "react";

const Test = () => {
   const[clickCounter, setclickCounter] = useState(0);

   const addCounter = () => {
    setclickCounter((prevState) => {
        return prevState + 1;
    })
   }

   const resetCounter = () => {
    setclickCounter(0);
    document.getElementById('tampil-teks').innerText='';
   }

   useEffect(() => {
    if(clickCounter > 5){
        document.getElementById('tampil-teks').innerText='Selamat kamu sudah melewati angka 5!'
    }
    if(clickCounter > 10){
        document.getElementById('tampil-teks').innerText='Selamat kamu sudah melewati angka 10!'
    }
    if(clickCounter > 15){
        document.getElementById('tampil-teks').innerText='Selamat kamu sudah melewati angka 15!'
    }
    if(clickCounter === 20){
        document.getElementById('tampil-teks').innerText='Selamat anda telah Finish!'
    }
    if(clickCounter > 20){
        setclickCounter(20)
    }
   },[clickCounter])

   return(
    <>
        <center>
        <h1>{clickCounter}</h1>
        <button onClick={addCounter}>Click</button>
        <button onClick={resetCounter}>Reset</button>
        <div id='tampil-teks'></div>
        </center>
    </>

   )

}

export default Test;