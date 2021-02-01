const Clientes = require('../models/Clientes');

// agrega un nuevo cliente

exports.nuevoCliente = async (req,res,next) =>{
    const cliente = new Clientes(req.body);

    try{
        //almacenar el registro

        await cliente.save();
        res.json({mensaje: 'Se agrego un nuevo cliente'});
    }catch(error){
        //si hay un error console.log y next
        console.log(error);
        next();
    }
}

// muestra los clientes

exports.mostrarClientes = async(req,res,next) =>{

    try{
        const clientes = await Clientes.find({});
        res.json(clientes);
    }catch(error){
        console.log(error);
        next();
    }

}

// muestra los clientes

exports.mostrarCliente = async(req,res,next) =>{

    const cliente = await Clientes.findById(req.params.idCliente);

    if(!cliente){
       
        res.json({mensaje: 'Ese cliente no existe'});
    }
    //mostrar cliente
        res.json(cliente);
        
    }


    // Actualiza un cliente por su id

    exports.actualizarCliente = async (req,res,next)=>{
        try{
            const cliente = await Clientes.findByIdAndUpdate({ _id : req.params.idCliente},
                req.body,{
                    new: true
                });
                res.json(cliente);
        }catch(error){
            console.error();
            next();
        }
    }

    //Elimina un cliente por Id

    exports.eliminarCliente = async (req,res,next)=>{
        try {
            await Clientes.findByIdAndDelete({_id : req.params.idCliente});
            res.json({mensaje: ' El cliente se ha eliminado'});
        } catch (error) {
            console.log(error);
            next();
        }
    }
