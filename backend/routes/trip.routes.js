const express = require('express')
const routes=express.Router()

const tripDetails = require('../controllers/trip.controller')

routes.post('/create',tripDetails.tripAdditionController)
routes.get('/',tripDetails.getTripDetailscontroller)
routes.get('/:id',tripDetails.getTripDetailsByIdcontroller)

module.exports = routes;