import { Specification } from '../model/Specification';
import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';

class ListSpecificationsService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    const specification = this.specificationsRepository.list();
    return specification;
  }
}

export { ListSpecificationsService };
