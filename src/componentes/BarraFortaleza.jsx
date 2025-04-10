import React from "react";

export default function BarraFortaleza({ fortaleza }) {
  const colores = ["rojo", "amarillo", "verde"];
  const textos = ["Poco segura", "Segura", "Muy segura"];

  return (
    <>
      <div className="barra-fortaleza-contenedor">
        <div
          className={`barra-fortaleza-progreso barra-fortaleza-${colores[fortaleza]}`}
          style={{ width: `${(fortaleza / 3) * 100}%` }}
        ></div>
      </div>
      <p className="barra-fortaleza-texto">{textos[fortaleza]}</p>
    </>
  );
}