export const obtener_fortaleza_contrasena = (contrasena) => {
  let fortaleza = 0;
  if (contrasena.length >= 8) fortaleza++;
  if (/[A-Za-z]/.test(contrasena)) fortaleza++;
  if (/[0-9]/.test(contrasena)) fortaleza++;
  if (/[!@#$%^&*().]/.test(contrasena)) fortaleza++;
  return fortaleza;
};
export const generar_contrasena = () => {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*().";
  let contrasena = "";
  for (let i = 0; i < 12; i++) {
    contrasena += caracteres[Math.floor(Math.random() * caracteres.length)];
  }
  return contrasena;
};