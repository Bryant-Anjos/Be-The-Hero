import { Segments, Joi } from 'celebrate'

export const LIST_PROFILES_VALIDATOR = {
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}
