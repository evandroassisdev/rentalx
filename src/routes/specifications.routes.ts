import { Router } from 'express';

import {
  createSpecificationController,
  listSpecificationController,
} from '../modules/cars/Specification';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
  createSpecificationController.handle(request, response);
});

specificationsRoutes.get('/', (request, response) => {
  listSpecificationController.handle(request, response);
});

export { specificationsRoutes };
