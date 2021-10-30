import { Router } from 'express';

import { CreateSpecificationController } from '../modules/cars/Specification/controllers/CreateSpecificationController';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post('/', createSpecificationController.handle);

// specificationsRoutes.get('/', (request, response) => {
//   listSpecificationController.handle(request, response);
// });

export { specificationsRoutes };
