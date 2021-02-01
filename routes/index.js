const express = require('express');
const router = express.Router();

const clienteController= require('../controllers/clienteController');

module.exports = function() {
    //esto luego se puede borrar inicio*****
    // router.get('/',(req,res)=>{
    //     res.send('inicio')
    // });
    // router.get('/nosotros',(req,res)=>{
    //     res.send('nosotros')
    // })
    //esto luego se borra fin*********

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

    return router;
}
