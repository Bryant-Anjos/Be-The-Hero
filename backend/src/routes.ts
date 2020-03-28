import { Router } from 'express'

import OngsController from './app/controllers/OngsController'
import IncidentsController from './app/controllers/IncidentsController'

const routes = Router()

routes.get('/ongs', OngsController.index)
routes.post('/ongs', OngsController.create)

routes.get('/incidents', IncidentsController.index)
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id', IncidentsController.delete)

export default routes
