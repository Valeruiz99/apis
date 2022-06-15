const input = document.querySelector("input");
const buscar = document.querySelector("#buscar");
const editar = document.querySelector("#editar");
const eliminar = document.querySelector("#eliminar");
const agregar = document.querySelector("#agregar");
const productoContainer = document.querySelector(".producto-card-content");

buscar.addEventListener('click',(buscar) => {
    buscar.preventDefault();
    traerUnProducto(input.value)
})
editar.addEventListener('click', (editar) => {
    editar.preventDefault();
    actualizarProducto(input.value)
})
eliminar.addEventListener('click', (eliminar) => {
    eliminar.preventDefault();
    eliminarProductos(input.value)
})
agregar.addEventListener('click', (agregar) => {
    agregar.preventDefault();
    agregarProducto(input.value)
})

function traerUnProducto(id){
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>console.log(json))
}
function mostrarTodo(){
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
}
function agregarProducto(producto){
    fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}
function actualizarProducto(){
    fetch(`https://fakestoreapi.com/products/${id}`,{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}
function eliminarProductos(id){
    fetch(`https://fakestoreapi.com/products/${id}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}
function listarProducto(){
    
    const titulo = document.getElementById('titulo');
    titulo.textContent = producto.title;

    const precio = document.getElementById('precio');
    precio.textContent = producto.price;

    const categoria = document.getElementById('categoria');
    categoria.textContent = producto.category;
}