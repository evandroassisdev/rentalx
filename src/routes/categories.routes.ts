import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/Category/controllers/CreateCategoryController';
import { ListCategoriesController } from '../modules/cars/Category/controllers/ListCategoriesController';

const categoriesRoutes = Router();
const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoriesController.handle);

// categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
//   return importCategoryController.handle(request, response);
// });

export { categoriesRoutes };
