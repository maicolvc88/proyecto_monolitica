const { request, response } = require('express');
const Cliente = require('../models/cliente');


//crear cliente
const createCliente = async (req = request, res = response) => {
    try{
        const { nombre, email } = req.body;
        const clienteBD = await Cliente.findOne({ nombre, email });
        if(clienteBD){// ya existe el proyecto
            return res.status(400).json({msg: 'Ya existe el cliente'});
        }
        const datos = {
            nombre, email
        };
        const cliente = new Cliente(datos); 
        await cliente.save();
        return res.status(201).json(Cliente);
    }catch(e){
        return res.status(500).json({mjs: e})
    }
}

//obtener clientes
const getCliente = async (req, res = response) => {
    try{   
        const clienteBD = await Cliente.find();
        return res.json(clienteBD);
    }catch(e){
        return res.status(500).json({mjs: e})
    }
    
}

//obtener clientes por Id
const getClienteById = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const query = { _id: id };
        const cliente = await Cliente.findOne(query);
        return res.json(cliente);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}

//editar clientes
const updateClienteById = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const data = req.body;// destructuring, spread (...)
        data.fechaActualizacion = new Date()
        const cliente = await Cliente.findByIdAndUpdate(id, data, {new : true});
        return res.status(201).json(cliente);
    }catch(e){
        return res.status(500).json({mjs: e})
    }
    
}

module.exports = { createCliente, getCliente, getClienteById, updateClienteById };