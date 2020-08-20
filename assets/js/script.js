
var lista_alumnos = ["Juan", "Diego","Marta"];
console.log(lista_alumnos);
//lista_alumnos.length = 2;
console.log(lista_alumnos[0]);
console.log(lista_alumnos[1]);
console.log(lista_alumnos[2]);
console.log(lista_alumnos.length);
document.write(lista_alumnos);

for(var i=0; i<lista_alumnos.length; i++){
  //document.write("<p>"+ lista_alumnos[i]+"</p>");
  document.write(`<p> ${lista_alumnos[i]} </p>`);
}

var jugadores=["Juan",9,"Diego",10,"Pedro",8];

document.write("<h3>Jugadores</h3>");
for(var i=0; i< jugadores.length; i+=2){
  document.write(`<p>Jugador: ${jugadores[i]} score: ${jugadores[i+1]} `);
}
console.log(jugadores.length);

var mascotas = [];
mascotas[0] = "Gato Floppy";
mascotas[1] = "Perro Duke";
console.log(mascotas[0]);

document.write("<hr><h2>Objetos<h2>");
var marca ="ford";

var automovil = {
  marca: 'Toyota',
  modelo: "Hilux",
  tipo: "Camioneta",
  traccion: "4x4",
  usado: false,
  resumen: function(){
    alert(`Automovil ${this.marca} Modelo: ${this.modelo}`);
  },
  resumen_html: function(){
    document.write(`<p>Automovil ${this.marca} Modelo: ${this.modelo} </p>`);
  }
}

console.log(automovil);
console.log(automovil.marca);
console.log(automovil.modelo);
console.log(automovil.traccion);
console.log(automovil.tipo);

console.log(automovil["marca"]);

//automovil.resumen();
automovil.resumen_html();

document.write("<hr><h2>Array de Objetos<h2>");

var partidos = [
  {hora:"11:00", arbitro: "Juan Riquelme", local:"Colo-Colo",visita:"Coquimbo unido",estadio:"Monumental" },
  {hora:"13:00", arbitro: "Pedro Perez", local:"La serena", visita:"Everton", estadio:"La portada"},
  {hora:"15:00", arbitro: "Juan Bonilla", local:"Cobreloa", visita:"San Marcos", estadio:"Zorros del desierto"},
  {hora:"20:00", arbitro: "Pedro Juarez", local:"U de chile", visita:"U Catolica", estadio:"Nacional"},
]

document.write("<h3>Lista partidos proximo Domingo</h3>");
document.write(`<h4> Total partidos a jugar: ${partidos.length}</h4>`);

for(var i=0; i<partidos.length; i++){
  document.write(`<p> Partido:${i+1} - Hora: ${partidos[i].hora} - Arbitro: ${partidos[i].arbitro} -Local: ${partidos[i].local} -Visita: ${partidos[i].visita} - Estadio: ${partidos[i].estadio}`);
}

var largo_partido = partidos.length;  
document.write(`<p>Primer partido: ${partidos[0].arbitro} | Ultimo partido: ${partidos[partidos.length-1].arbitro} </p>`);
