const { request, response } = require('express');
const Etapa = require('../models/etapa');


//crear cliente
const createEtapa = async (req = request, res = response) => {
    try{
        const { nombre } = req.body;
        const etapaBD = await Etapa.findOne({ nombre });
        if(etapaBD){// ya existe la etapa
            return res.status(400).json({msg: 'Ya existe la etapa'});
        }
        const datos = {
            nombre
        };
        const etapa = new Etapa(datos); 
        await etapa.save();
        return res.status(201).json(Etapa);
    }catch(e){
        return res.status(500).json({mjs: e})
    }
}

//obtener estapas
const getEtapa = async (req, res = response) => {
    try{   
        const etapaBD = await Etapa.find();
        return res.json(etapaBD);
    }catch(e){
        return res.status(500).json({mjs: e})
    }
    
}

//obtener clientes por Id
const getEtapaById = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const query = { _id: id };
        const etapa = await Etapa.findOne(query);
        return res.json(etapa);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}

//editar clientes
const updateEtapaById = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const data = req.body;// destructuring, spread (...)
        data.fechaActualizacion = new Date()
        const etapa = await Etapa.findByIdAndUpdate(id, data, {new : true});
        return res.status(201).json(etapa);
    }catch(e){
        return res.status(500).json({mjs: e})
    }
    
}

module.exports = { createEtapa, getEtapa, getEtapaById, updateEtapaById };