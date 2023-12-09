const { Router } = require('express');
const { createCliente, getCliente, getClienteById, updateClienteById  } = require('../controllers/cliente');

const router = Router();

/**
 * Obtiene todos los clientes
 */
router.get('/', getCliente);

/**
 * Obtiene un tipos de cliente por id
 */
 router.get('/:id', getClienteById);

/**
 * Crear un cliente
 */
router.post('/', createCliente);

/**
 * Actualiza un cliente por id
 */
router.put('/:id', updateClienteById);

router.patch('/:id', (req, res) => {
    res.json({});
});

module.exports = router;