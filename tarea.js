////////////////////////////////////////////////////////////
// EJERCICIO 1
////////////////////////////////////////////////////////////



// const entrada = prompt("Ingrese número: ")
// imprimirNumeros(entrada);

// function imprimirNumeros(entrada){
//     const arregloNumeros = [];
//     for(i=1; i <= entrada ; i++){
//         arregloNumeros.push(i);
//         console.log(arregloNumeros);
//     }
// }



////////////////////////////////////////////////////////////
// EJERCICIO 2
////////////////////////////////////////////////////////////



// const arreglo1 = ['js', 'python', 'php','c#'];
// const arreglo2 = ['c#','java', 'js', 'sql'];
// const resultado = [];

// function comparar(a1,a2){
//     for(i=0; i <= a1.length; i++){       
//         for(j=0; j <= a1.length-1; j++){    
//             if(a1[i] == a2[j]){
//                 resultado.push(a1[i]);
//             }            
//         }
//     }
//     console.log(resultado)  
// }

//  comparar(arreglo1,arreglo2);



////////////////////////////////////////////////////////////
// EJERCICIO 3.1
////////////////////////////////////////////////////////////



// let carrito = {
//     montoTotal: 10,
//     productos: ["Leche"]
// }

// class Carrito {

//     constructor(montoTotal,productos) {
//       this.montoTotal= montoTotal;
//       this.productos = productos;      
//     }
// }

// const carrito2 = new Carrito(200,"harina");
// const carrito3 = new Carrito(500,"gaseosa");

// console.log(carrito2)
// console.log(carrito3)




////////////////////////////////////////////////////////////
// EJERCICIO 3.2
////////////////////////////////////////////////////////////



// let carrito = {
//     montoTotal: 10,
//     productos: ["Leche"]
// }

// class Carrito {
//     constructor(montoTotal,producto) {
//         this.montoTotal= montoTotal;
//         this.productos = [`${producto}`]
//     }
//     agregarProducto(nombre,precio,cantidad){
//         this.montoTotal += precio*cantidad        
//         this.productos.push(nombre)
//     }
// }

// const carrito1 = new Carrito(10,"leche");
// carrito1.agregarProducto("Azucar",5,2);
// console.log(carrito1);



////////////////////////////////////////////////////////////
// EJERCICIO 3.3
////////////////////////////////////////////////////////////



let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}

class Carrito {
    constructor(montoTotal, producto) {
        this.montoTotal = montoTotal;
        this.productos = [`${producto}`]
    }

    verificarProducto(nombre, precio, cantidad) {

        const arregloProductos = this.productos;

        for (let i = 0; i <= arregloProductos.length; i++) {
            if (nombre == arregloProductos[i]) {
                console.log("el producto existe")
                return
            }           
        }
                
        console.log("el producto no existe")
        this.montoTotal += precio * cantidad;
        this.productos.push(nombre);
    }
}

const carrito1 = new Carrito(10, "leche");
carrito1.verificarProducto("azucar", 5, 2);
carrito1.verificarProducto("pera", 5, 2);
carrito1.verificarProducto("banana", 5, 2);

console.log(carrito1);


