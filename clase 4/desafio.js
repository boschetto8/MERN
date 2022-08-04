const fs = require('fs/promises');

class Contenedor {
    constructor (ruta){
        this.ruta = ruta;
    }
    
   async getAll(){
    try {
    const prod = await fs.readFile(this.ruta, 'utf-8');
    const JSONprod = JSON.parse(prod)
    return JSONprod        
    } 
    catch (error) {
             return []
        
             }
    }
    async save (obj){
        try {
            const objs = await this.getAll();
            let newId;
            if (objs.length === 0){
                newId = 1
            }
            else {
                newId = objs[objs.length - 1].id + 1
            }
            

            const newObj = {id: newId, ...obj};
            objs.push(newObj);
            await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2));
            return newId;


        } catch (error) {
           console.log('Mensaje error');
        }



    }
    async getById(id){
        try {
            const objs = await this.getAll();
            
            const idBuscado = objs.findIndex((p) => p.id == id)
            return objs[idBuscado]
                       
        } catch (error) {
            console.log('No se pudo encontrar')
        }
    }

    
    async deleteById(id){

        try {
            const objs = await this.getAll();
            const idBuscado = objs.findIndex((p)=> p.id == id);
                if (idBuscado == -1) {
                return 'ID Inexistente'
            } else {
                objs.splice(idBuscado, 1);
                await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2)); 
            }
        } catch (error) {
            return 'No se pudo eliminar'
        }


    }
    async deleteAll(){
        try {
            let objs = []
            await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2)); 
        } catch (error) {
            return 'No se pueden borrar los archivos'
        }
    }
}


async function ejecutar () {
const producto = new Contenedor('./archivo/archivo.json');
console.log(await producto.save({"title": "Botines","price": 20000,"thumbnail": "https://www.pngwing.com/es/free-png-xgsls"}));
console.log(await producto.save({"title": "Pelota","price": 12500,"thumbnail": "https://www.pngegg.com/es/png-cgxve"}));
console.log(await producto.save({"title": "Guantes de arquero","price": 14000, "thumbnail": "https://www.pngwing.com/es/free-png-iiycv"}));
console.log('todos los productos',await producto.getAll());
console.log('id buscado', await producto.getById(3));
console.log('producto borrado', await producto.deleteById(1));
//console.log('todos los productos borrados',await producto.deleteAll())
};

ejecutar()




