class Usuario  {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas
    }
    getFullname(){
        return `${this.nombre} ${this.apellido}` 
    }
    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota)
    }

    countMascotas(){
        return this.mascotas.length
    }
    addBook(nombre, autor){
        this.libros.push({'nombre': nombre, 'autor': autor})
    }
    getBookNames(){
         const librosNombre = this.libros.map((libro)=>{
            return libro.nombre
        })
        return librosNombre
    }


} 

const user = new Usuario ('Juan', 'Gomez', [{'nombre':'2666','autor':'Roberto Bolaño'}], ['Titan', 'Norma'])
const user2 = new Usuario ('Macarena', 'Elissamburu', [{'nombre':'El principito','autor':'Saint-Exupery'},{'nombre':'Mi planta de naranja Lima','autor':'Vasconcelos'}], ['Fermin'])


console.log (user)
console.log(user.getFullname())
console.log(user2.getFullname())
console.log('Antes de agregar mascote', user2.countMascotas())
user2.addMascota('Vicente')
console.log('Despues de agregar mascote',user2.countMascotas());
console.log (user2)

user.addBook('Las venas abiertas de america Latina', 'Galeano')

console.log ('Libro agregados',user);

console.log ('array de libros user', user.getBookNames())


console.log ('array de libros user2', user2.getBookNames())


