import { container } from 'tsyringe';

// USERS
import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
// CATEGORIES
import { ICategoriesRepository } from '../../modules/cars/Category/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/Category/repositories/implementations/CategoriesRepository';
// SPECIFICATIONS
import { SpecificationsRepository } from '../../modules/cars/Specification/repositories/implementations/SpecificationsRepository';
import { ISpecificationsRepository } from '../../modules/cars/Specification/repositories/ISpecificationsRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
