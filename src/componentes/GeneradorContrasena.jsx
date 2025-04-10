import React from "react";
import { generar_contrasena } from "../utils";

export default function GeneradorContrasena({ contrasena_generada, setContrasenaGenerada }) {
  return (
    <>
      <button
        onClick={() => setContrasenaGenerada(generar_contrasena())}
        className="generar-contrasena-boton"
      >
        Generar Contraseña
      </button>
      {contrasena_generada && (
        <div className="contrasena-generada-div">
          {contrasena_generada}
        </div>
      )}
    </>
  );
}