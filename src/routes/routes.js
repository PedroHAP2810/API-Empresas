const express = require('express')
const router = express.Router()

const CargoController = require('../controllers/CargoController')
const DepartamentoController = require('../controllers/DepartamentoController')


// validators
const { validarCargo } = require('../vallidators/cargoValidator')
const { validarDepartamento } = require('../vallidators/departamentoValidator')

// Cargo
router.get('/cargos', CargoController.buscarTodos)
router.get('/cargos/:id', CargoController.buscarPorID)
router.post('/cargos', validarCargo, CargoController.criar)
router.put('/cargos/:id', validarCargo, CargoController.atualizar)
router.delete('/cargos/:id', CargoController.excluir)

// Funcionarios



// Departamentos
router.get('/departamentos', DepartamentoController.buscarTodos)
router.get('/departamentos/:id', DepartamentoController.buscarPorID)
router.post('/departamentos', validarDepartamento, DepartamentoController.criar)
router.put('/departamentos/:id', validarDepartamento, DepartamentoController.atualizar)
router.delete('/departamentos/:id', DepartamentoController.excluir)


module.exports = router