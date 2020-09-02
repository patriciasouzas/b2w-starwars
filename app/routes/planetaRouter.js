const express = require("express")
const router = express.Router();
const planetaController = require('../controller/planetaController')

router.post('/', planetaController.post)

router.get('/', planetaController.get)

router.get('/:id', planetaController.getByID)

router.get('/planeta/:nome', planetaController.getNome)

router.get('/', planetaController.get)

router.delete('/:id', planetaController.deletePlaneta)

module.exports = router