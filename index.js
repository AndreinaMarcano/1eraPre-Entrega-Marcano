alert("¡Hola Bienvenido a Mi Convertidor de Divisa!. ");
let seleccionePais = prompt(
  "Seleccione un Pais: Argentina - Chile - Mexico"
).toLocaleUpperCase();

let sigueEnLoop = true;

const paises = [
  {
    id: 1,
    nombre: "ARGENTINA",
    dolar: 140,
    euro: 150,
  },
  {
    id: 2,
    nombre: "CHILE",
    dolar: 800,
    euro: 820,
  },
  {
    id: 1,
    nombre: "MEXICO",
    dolar: 19,
    euro: 22,
  },
];

const busquedaRealizada = (pais) => {
  const nombrePais = pais.nombre;
  const seleccion = {
    ARGENTINA: paises[0],
    CHILE: paises[1],
    MEXICO: paises[2],
  };
 
  if (pais === undefined || seleccion[nombrePais] === undefined) {
    console.log("ENTRO AQUI");
    return (seleccionePais = prompt(
      "Su país no es válido, inténtelo nuevamente Seleccione un Pais: Argentina - Chile - Mexico"
    ).toLocaleUpperCase());
  }
  return alert(
    `${seleccion[nombrePais].nombre} tiene el dolar a ${seleccion[nombrePais].dolar} y el euro a ${seleccion[nombrePais].euro}`
  );
};

while (sigueEnLoop === true) {
  const buscarPais = paises.find((pais) => pais.nombre === seleccionePais);
  busquedaRealizada(buscarPais);

  let desicion = prompt(
    "Desea saber otro pais coloque si o no"
  ).toLocaleUpperCase();
  if (desicion === "NO") sigueEnLoop = false;
  seleccionePais = prompt(
    "Seleccione un Pais: Argentina - Chile - Mexico"
  ).toLocaleUpperCase();
}

