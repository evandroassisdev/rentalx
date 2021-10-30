import { Request, Response } from 'express';

import { ListSpecificationsService } from '../services/ListSpecificationsService';

class ListSpecificationController {
  constructor(private listSpecificationsService: ListSpecificationsService) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const all = await this.listSpecificationsService.execute();

    return response.json(all);
  }
}

export { ListSpecificationController };
