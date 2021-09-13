import { CreateSpecificationController } from './controllers/CreateSpecificationController';
import { ListSpecificationController } from './controllers/ListSpecificationController';
import { SpecificationsRepository } from './repositories/implementations/SpecificationsRepository';
import { CreateSpecificationService } from './services/CreateSpecificationService';
import { ListSpecificationsService } from './services/ListSpecificationsService';

const specificationRepository = SpecificationsRepository.getInstance();

const createSpecificationService = new CreateSpecificationService(
  specificationRepository,
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationService,
);

const listSpecificationsService = new ListSpecificationsService(
  specificationRepository,
);
const listSpecificationController = new ListSpecificationController(
  listSpecificationsService,
);

export { createSpecificationController, listSpecificationController };
