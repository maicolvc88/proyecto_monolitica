const { Router } = require('express');
const { createTipoProyecto, getTiposProyecto, getTiposProyectoById, updateTipoProyectoById } = require('../controllers/tipoProyecto');

const router = Router();

/**
 * Obtiene todos los tipos de proyectos
 */
router.get('/', getTiposProyecto);

/**
 * Obtiene un tipos de proyectos por id
 */
 router.get('/:id', getTiposProyectoById);

/**
 * Crear un tipos de proyectos
 */
router.post('/', createTipoProyecto);

/**
 * Actualiza un tipos de proyectos por id
 */
router.put('/:id', updateTipoProyectoById);

router.patch('/:id', (req, res) => {
    res.json({});
});

module.exports = router;