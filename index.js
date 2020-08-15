const concesionaria = [
  {
    marca: "Peugeot",
    modelo: "206",
    precio: "$200.000",
    puertas: "4",
  },
  {
    marca: "Peugeot",
    modelo: "208",
    precio: "$250.000",
    puertas: "5",
  },
  {
    marca: "Honda",
    modelo: "Titan",
    precio: "$60.000",
    cilindrada: "125c",
  },
  {
    marca: "Yamaha",
    modelo: "YBR",
    precio: "$80.500,50",
    cilindrada: "160c",
  },
];

const menorAmayor = (menor, mayor) => {
  const formateoDatos = [
    `Vehículo más caro: ${mayor.marca} ${mayor.modelo} ${mayor.precio}`,
    `Vehículo más barato: ${menor.marca} ${menor.modelo} ${menor.precio}`,
  ];
  return formateoDatos.join("\n");
};

const tieneY = (dato) => {
  const devolverDatosY = [];
  dato.forEach((i) => {
    const length = i.objetoJson.split("Y").length - 1;
    devolverDatosY.push({
      length: length,
      text: `${i.marca} ${i.modelo} ${i.precio}`,
    });
  });
  const devolverY = devolverDatosY.sort((a, b) => a.length - b.length)[
    devolverDatosY.length - 1
  ].text;
  return `Vehículo que contiene en el modelo la letra ‘Y’: ${devolverY}`;
};

const formatItem = (item) => {
  const { marca, modelo, precio, puertas, cilindrada } = item;
  const tieneCilindrada = cilindrada ? ` Cilindrada: ${cilindrada} //` : "";
  const tienePuertas = puertas ? ` Puertas: ${puertas} //` : "";
  const formatoDeDatos = `Marca: ${marca} // Modelo: ${modelo} //${tienePuertas}${tieneCilindrada} Precio: ${precio}`;
  const precioActual = parseFloat(
    precio.replace("$", "").replace(".", "").replace(",", ".")
  );
  return {
    objetoJson: formatoDeDatos,
    precioNumero: precioActual,
    ...item,
  };
};

const Main = () => {
  let lineaObjeto = [];
  concesionaria.forEach((forItem) => {
    lineaObjeto.push(formatItem(forItem));
  });
  const displayLines = lineaObjeto.map((i) => i.objetoJson);
  const ordenarPorPrecio = lineaObjeto.sort(
    (a, b) => a.precioNumero - b.precioNumero
  );
  const primeroYultimo = [
    ordenarPorPrecio[0],
    ordenarPorPrecio[ordenarPorPrecio.length - 1],
  ];
  console.log(displayLines.join("\n") + "\n");
  console.log(menorAmayor(...primeroYultimo));
  console.log(tieneY(lineaObjeto) + "\n");

  console.log(
    `Vehículos ordenados por precio de mayor a menor:
    \n${ordenarPorPrecio
      .map((i) => `${i.marca} ${i.modelo}`)
      .reverse()
      .join("\n")}`
  );
};

Main();
