import { Segments, Joi } from 'celebrate'

export const DELETE_INCIDENT_VALIDATOR = {
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }),
}

export const LIST_INCIDENTS_VALIDATOR = {
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  }),
}
