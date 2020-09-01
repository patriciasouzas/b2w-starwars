const express = require("express")
const router = express.Router();
const planetaController = require('../controller/planetaController')

router.post('/', planetaController.post)

router.get('/', planetaController.get)

module.exports = router