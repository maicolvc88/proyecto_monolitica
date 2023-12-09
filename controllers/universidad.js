const { request, response } = require('express');
const Universidad = require('../models/universidad');

//crear universidad
const createUniversidad = async (req = request, res = response) => {
    try{
        const { nombre, direccion, telefono } = req.body;
        const universidadBD = await Universidad.findOne({ nombre, direccion, telefono });
        if(universidadBD){// ya existe el proyecto
            return res.status(400).json({msg: 'Ya existe la Universidad'});
        }
        const datos = {
            nombre, direccion, telefono
        };
        const universidad = new Universidad(datos); 
        await universidad.save();
        return res.status(201).json(Universidad);
    }catch(e){
        return res.status(500).json({mjs: e})
    }
}

//obtener universidades
const getUniversidad = async (req, res = response) => {
    try{   
        const universidadBD = await Universidad.find();
        return res.json(universidadBD);
    }catch(e){
        return res.status(500).json({mjs: e})
    }
    
}

//obtener universidades por Id
const getUniversidadById = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const query = { _id: id };
        const universidad = await Universidad.findOne(query);
        return res.json(universidad);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}

//editar universidad
const updateUniversidadById = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const data = req.body;// destructuring, spread (...)
        data.fechaActualizacion = new Date()
        const universidad = await Universidad.findByIdAndUpdate(id, data, {new : true});
        return res.status(201).json(universidad);
    }catch(e){
        return res.status(500).json({mjs: e})
    }
    
}

module.exports = { createUniversidad, getUniversidad, getUniversidadById, updateUniversidadById };