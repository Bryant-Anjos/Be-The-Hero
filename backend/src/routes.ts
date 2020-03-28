import { Router } from 'express'

import OngsController from './app/controllers/OngsController'
import IncidentsController from './app/controllers/IncidentsController'
import ProfilesController from './app/controllers/ProfilesController'
import SessionController from './app/controllers/SessionController'

const routes = Router()

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngsController.index)
routes.post('/ongs', OngsController.create)

routes.get('/profiles', ProfilesController.index)

routes.get('/incidents', IncidentsController.index)
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id', IncidentsController.delete)

export default routes
