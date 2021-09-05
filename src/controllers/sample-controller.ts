import { SampleService } from '../domain/services/sampleService';
import { Controller } from './controller';
import { HttpResponse, ok } from './http';

export class SampleController implements Controller {
  constructor(private readonly sampleService: SampleService) {}

  async handle(): Promise<HttpResponse<any[]>> {
    const data = await this.sampleService.findAll();
    console.log('Controller', data);
    return ok(data);
  }
}
