import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../modules/cars/Category/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/Category/repositories/implementations/CategoriesRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);
