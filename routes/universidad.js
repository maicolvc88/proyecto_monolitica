const { Router } = require('express');
const { createUniversidad, getUniversidad, getUniversidadById, updateUniversidadById  } = require('../controllers/universidad');

const router = Router();

/**
 * Obtiene todos los clientes
 */
router.get('/', getUniversidad);

/**
 * Obtiene un tipos de cliente por id
 */
 router.get('/:id', getUniversidadById);

/**
 * Crear un cliente
 */
router.post('/', createUniversidad);

/**
 * Actualiza un cliente por id
 */
router.put('/:id', updateUniversidadById);

router.patch('/:id', (req, res) => {
    res.json({});
});

module.exports = router;