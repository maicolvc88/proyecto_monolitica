const { Router } = require('express');
const { createEtapa, getEtapa, getEtapaById, updateEtapaById   } = require('../controllers/etapa');

const router = Router();

/**
 * Obtiene todas las etapas
 */
router.get('/', getEtapa);

/**
 * Obtiene una etapa por id
 */
 router.get('/:id', getEtapaById);

/**
 * Crear una etapa
 */
router.post('/', createEtapa);

/**
 * Actualiza una etapa por id
 */
router.put('/:id', updateEtapaById);

router.patch('/:id', (req, res) => {
    res.json({});
});

module.exports = router;