import { CreateCategoryController } from './controllers/CreateCategoryController';
import { ImportCategoryController } from './controllers/ImportCategoryController';
import { ListCategoriesController } from './controllers/ListCategoriesController';
import { CategoriesRepository } from './repositories/implementations/CategoriesRepository';
import { CreateCategoryService } from './services/CreateCategoryService';
import { ImportCategoryService } from './services/ImportCategoryService';
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

const importCategoryService = new ImportCategoryService(categoriesRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryService,
);

export {
  createCategoryController,
  listCategoriesController,
  importCategoryController,
};
