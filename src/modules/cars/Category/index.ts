import { CreateCategoryController } from './controllers/CreateCategoryController';
import { ListCategoriesController } from './controllers/ListCategoriesController';
import { CategoriesRepository } from './repositories/implementations/CategoriesRepository';
import { CreateCategoryService } from './services/CreateCategoryService';
import { ListCategoriesService } from './services/ListCategoriesService';

const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryService = new CreateCategoryService(categoriesRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryService,
);

const listCategoriesService = new ListCategoriesService(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesService,
);

export { createCategoryController, listCategoriesController };
