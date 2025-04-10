import React, { useState } from "react";
import InputContrasena from "./componentes/InputContrasena";
import BarraFortaleza from "./componentes/BarraFortaleza";
import GeneradorContrasena from "./componentes/GeneradorContrasena";
import { obtener_fortaleza_contrasena } from "./utils";
import './App.css'; 

export default function AplicacionFortalezaContrasena() {
  const [contrasena, setContrasena] = useState("");
  const [contrasena_generada, setContrasenaGenerada] = useState("");
  const [mostrar_contrasena, setMostrarContrasena] = useState(false);
  const fortaleza = obtener_fortaleza_contrasena(contrasena);

  return (
    <div className="contenedor-principal">
      <div className="contenedor-formulario">
        <h2 className="titulo-formulario">Comprobador de Contraseña</h2>

        <InputContrasena
          contrasena={contrasena}
          setContrasena={setContrasena}
          mostrar={mostrar_contrasena}
          setMostrar={setMostrarContrasena}
        />

        <BarraFortaleza fortaleza={fortaleza} />

        <GeneradorContrasena
          contrasena_generada={contrasena_generada}
          setContrasenaGenerada={setContrasenaGenerada}
        />
      </div>
    </div>
  );
}