class Departamento {
    nombre : String
    constructor(nombre:string) {
        this.nombre = nombre
    }
    getName(){
        return this.nombre;
    }
}
class Piso {
    nombre : string
    departamentos :Departamento[];
    constructor(nombre : string) {
        this.nombre = nombre
        this.departamentos = this.departamentos =[]
    }
    pushDepartamento(depTo :Departamento){
        return this.departamentos.push(depTo);
    }
    getDepartamentos(){
        return this.departamentos;
    }

}
class Edificio {
    piso :Piso[]
    constructor(piso:Piso[]) {
        this.piso = piso
    }
    addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento) {
        const pisoEncontrado = this.piso.find(piso => piso.nombre === nombreDePiso);
        if (pisoEncontrado) {
            pisoEncontrado.pushDepartamento(departamento);
        }else{
            console.error('no exite un piso con el nombre ${nombreDePiso}')
        }
    }
    getDepartamentosByPiso(nombreDePiso:string): Departamento[]{
        const pisoEncontrado = this.piso.find(piso => piso.nombre === nombreDePiso);
        if (pisoEncontrado) {
        return pisoEncontrado.getDepartamentos();
    }else {
        console.log("Error: El piso no existe.");
        return[]
    }
}
}
function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
    const otroPiso = new Piso("primer piso");
    const unEdificio = new Edificio([unPiso, otroPiso]);
    const deptoUno = new Departamento("depto uno");
    const deptoDos = new Departamento("depto dos");
    const deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
  
    const deptos = unEdificio.getDepartamentosByPiso("planta baja");
    const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
  
    if (
      Array.isArray(deptosEmpty) &&
      deptosEmpty.length == 0 &&
      deptos.length == 3 &&
      deptos[2].getName() == "depto tres"
    ) {
      console.log("testClaseBandaApartment passed");
    } else {
      throw "testClaseBandaApartment not passed";
    }
  }
  
  function main() {
    testClaseEdificio();
  }
  main();