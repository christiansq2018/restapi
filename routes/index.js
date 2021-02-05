const express = require('express');
const router = express.Router();

const clienteController= require('../controllers/clienteController');
const productosController= require('../controllers/productosController');
const pedidosController= require('../controllers/pedidosController');

module.exports = function() {

    /**CLIENTES *************************************************************/

    // Agrega nuevos clientes via POST
    router.post('/clientes',clienteController.nuevoCliente);

    // Obtener clientes via GET
    router.get('/clientes',clienteController.mostrarClientes);

    // Obtener clientes por ID
    router.get('/clientes/:idCliente',clienteController.mostrarCliente);

    // Actualizar cliente por ID
    router.put('/clientes/:idCliente',clienteController.actualizarCliente);

    // Eliminar Cliente
    router.delete('/clientes/:idCliente',clienteController.eliminarCliente);

     /**PRODUCTOS ******************************************************/

    // Sube archivo y luego un nuevo producto

     router.post('/productos',
     productosController.subirArchivo,
     productosController.nuevoProducto);

     //** Muestra todos los productos */

    router.get('/productos',productosController.mostrarProductos);

    // muestra un producto en especifico por ID

    router.get('/productos/:idProducto',productosController.mostrarProducto);

    // Actualizar productos
    router.put('/productos/:idProducto',
        productosController.subirArchivo,
        productosController.actualizarProducto);

        // eliminar producto

        router.delete('/productos/:idProducto',productosController.eliminarProducto);


        /**PEDIDOS ******************************************************/
        // nuevo pedido

        router.post('/pedidos',pedidosController.nuevoPedido);

        // mostrar todos los pedidos
        router.get('/pedidos',pedidosController.mostrarPedidos);

        // mostrar pedidos por id
        router.get('/pedidos/:idPedido',pedidosController.mostrarPedido);

        // Actualizar productos
        router.put('/pedidos/:idPedido',pedidosController.actualizarPedido);

        router.delete('/pedidos/:idPedido',pedidosController.eliminarPedido);



    return router;
}
