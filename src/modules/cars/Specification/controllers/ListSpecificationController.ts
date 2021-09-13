import { Request, Response } from 'express';

import { ListSpecificationsService } from '../services/ListSpecificationsService';

class ListSpecificationController {
  constructor(private listSpecificationsService: ListSpecificationsService) {}
  handle(request: Request, response: Response): Response {
    const all = this.listSpecificationsService.execute();
    return response.json(all);
  }
}

export { ListSpecificationController };
