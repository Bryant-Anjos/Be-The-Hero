import { Router } from 'express'
import { celebrate } from 'celebrate'

import OngsController from './app/controllers/OngsController'
import IncidentsController from './app/controllers/IncidentsController'
import ProfilesController from './app/controllers/ProfilesController'
import SessionController from './app/controllers/SessionController'

import { CREATE_ONG_VALIDATOR } from './app/validators/OngValidator'
import { LIST_PROFILES_VALIDATOR } from './app/validators/ProfileValidators'
import {
  DELETE_INCIDENT_VALIDATOR,
  LIST_INCIDENTS_VALIDATOR,
} from './app/validators/IncidatValidators'

const routes = Router()

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngsController.index)
routes.post('/ongs', celebrate(CREATE_ONG_VALIDATOR), OngsController.create)

routes.get(
  '/profiles',
  celebrate(LIST_PROFILES_VALIDATOR),
  ProfilesController.index
)

routes.get(
  '/incidents',
  celebrate(LIST_INCIDENTS_VALIDATOR),
  IncidentsController.index
)
routes.post('/incidents', IncidentsController.create)
routes.delete(
  '/incidents/:id',
  celebrate(DELETE_INCIDENT_VALIDATOR),
  IncidentsController.delete
)

export default routes
