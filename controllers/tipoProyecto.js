
const { request, response } = require('express');
const TipoProyecto = require('../models/tipoProyecto');

/**
 * Consultar un tipo de equipo por Id
 */
const getTiposProyectoById = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const query = { _id: id };
        const tipoProyecto = await TipoProyecto.findOne(query);
        return res.json(tipoProyecto);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}

/**
 * Actualiza un tipo de proyecto por su ID
 */
const updateTipoProyectoById = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const data = req.body;// destructuring, spread (...)
        data.fechaActualizacion = new Date()
        const tipoProyecto = await TipoProyecto.findByIdAndUpdate(id, data, {new : true});
        return res.status(201).json(tipoProyecto);
    }catch(e){
        return res.status(500).json({mjs: e})
    }
    
}

/**
 * Borrar un tipo de proyecto por su ID
 
const deleteTipoEquipoByID = async (req = request, res = response) => {
    // try- catch
    const id = req.params.id;
    const tipoEquipo = await TipoEquipo.findByIdAndDelete(id);
    res.status(204).json(tipoEquipo);
}*/

/**
 * Consulta todos los tipos de proyectos
 */
const getTiposProyecto = async (req, res = response) => {
    try{   
        const tiposPoyectosBD = await TipoProyecto.find();
        return res.json(tiposPoyectosBD);
    }catch(e){
        return res.status(500).json({mjs: e})
    }
    
}

/**
 * crea un tipo de eqipo
 */
const createTipoProyecto = async (req = request, res = response) => {
    try{
        const { nombre } = req.body;
        const tipoProyectoBD = await TipoProyecto.findOne({ nombre });
        if(tipoProyectoBD){// ya existe el proyecto
            return res.status(400).json({msg: 'Ya existe tipo proyecto'});
        }
        const datos = {
            nombre
        };
        const tipoProyecto = new TipoProyecto(datos); 
        await tipoProyecto.save();
        return res.status(201).json(tipoProyecto);
    }catch(e){
        return res.status(500).json({mjs: e})
    }
    
}

module.exports = { createTipoProyecto, getTiposProyecto, getTiposProyectoById, updateTipoProyectoById  };