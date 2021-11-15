import { AppError } from '../../../../../src/errors/AppError';
import { CategoriesRepositoryFake } from '../../../../../src/modules/cars/Category/repositories/fakeRepository/CategoriesRepositoryFake';
import { CreateCategoryService } from '../../../../../src/modules/cars/Category/services/CreateCategoryService';

let createCategoryService: CreateCategoryService;
let categoriesRepositoryFake: CategoriesRepositoryFake;

describe('Create new category', () => {
  beforeEach(() => {
    categoriesRepositoryFake = new CategoriesRepositoryFake();
    createCategoryService = new CreateCategoryService(categoriesRepositoryFake);
  });

  it('should be able to create a new category', async () => {
    const category = {
      name: 'Category Test',
      description: 'Category description Test',
    };

    await createCategoryService.execute(category);

    const categoryCreated = await categoriesRepositoryFake.findByName(
      category.name,
    );

    expect(categoryCreated).toHaveProperty('id');
  });

  it('should be able to create a category with same name', async () => {
    expect(async () => {
      const category = {
        name: 'Category Test',
        description: 'Category description Test',
      };

      await createCategoryService.execute(category);

      await createCategoryService.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
