'use client';
import React, { useState } from "react";
import { traducir } from "./module/generator.js";

const HomePage = () => {
  const [inputText, setInputText] = useState("");
  const [resultadoText, setResultadoText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleTraducir = (e) => {
    e.preventDefault();
    const { resultados, errores } = traducir(inputText);
    if (errores.length > 0) {
      setResultadoText(errores.join('\n'));
    } else {
      setResultadoText(resultados.join('\n'));
    }
  };

  const handleLimpiar = (e) => {
    e.preventDefault();
    setInputText("");
    setResultadoText("");
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center p-10 rounded-lg">Traductor</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="p-5 rounded-md font-bold md:w-1/2 lg:w-3/5 text-xs">
          <h2 className="text-2xl text-center mx-auto">Texto</h2>
          <p className="text-lg mt-5 text-center">Inserta tu 
          <span className="font-bold text-[#ffffff]"> Texto a traducir</span></p>
          <form onSubmit={(e) => e.preventDefault()}
            className="container mx-auto mt-0 rounded-md py-6 px-3 mb-1">
            <div className="mb-auto">
              <textarea className="block border-2 w-full rounded-lg p-12"
                type="text"
                placeholder="texto"
                id="inputText"
                value={inputText}
                onChange={handleInputChange}  
                rows="3"
                cols="30"/>
            </div>
            <button
              type={"submit"}
              onClick={handleTraducir}
              className="mt-5 bg-[#457b9d] w-full p-4 uppercase font-bold hover:bg-[#0077b6] 
                      cursor-pointer text-[#ffff] rounded-lg">Traducir</button>
            <button
              type={"button"}
              onClick={handleLimpiar}
              className="mt-5 bg-[#1d3557] w-full p-4 uppercase font-bold hover:bg-[#219ebc] 
                        cursor-pointer text-[#ffff] rounded-lg">Limpiar</button>
          </form>
        </div>
        <div
          className="text-white md:text-[#ffffff] rounded-lg
                      font-bold text-3xl md:h-screen md:w-1/2 lg:w-1/2 p-5">
          <h2 className="text-2xl text-center mx-auto text-black">Texto traducido</h2>
          <p className="text-lg mt-5 text-center text-black">Aquí tienes tu
            <span className="font-bold text-[#ffffff]"> texto traducido</span></p>
          <textarea
            className="block border-2 w-full mt-6 rounded-lg py-5 mb-3 text-[#0b090a] p-10"
            id="resultadoText"
            readOnly
            rows="6"
            cols="30"
            value={resultadoText}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;