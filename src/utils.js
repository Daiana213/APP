export const obtener_fortaleza_contrasena = (contrasena) => {
  let fortaleza = 0;

  if (/[A-Z]/.test(contrasena)) fortaleza++; 
  if (/[a-z]/.test(contrasena)) fortaleza++; 
  if (/[0-9]/.test(contrasena)) fortaleza++; 
  if (/[!@#$%^&*().]/.test(contrasena)) fortaleza++; 
  if (contrasena.length >= 6) fortaleza++; 

  if (/(\w)\1{2,}/.test(contrasena)) fortaleza--; 
  if (/123|abc|password|qwerty|letmein|admin|welcome|iloveyou/i.test(contrasena)) fortaleza--; 
  
  return Math.max(0, Math.min(fortaleza, 5));
};
export const generar_contrasena = () => {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*().";
  let contrasena = "";
  for (let i = 0; i < 16; i++) {
    contrasena += caracteres[Math.floor(Math.random() * caracteres.length)];
  }
  return contrasena;
};