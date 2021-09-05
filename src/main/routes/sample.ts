import { Router } from 'express';
import { adaptRoute } from '../adapters/express-router';
import { SampleController } from '../../controllers/sample-controller';
import { SampleRepository } from '../../domain/repositories/SampleMemoryRepository';
import { SampleService } from '../../domain/services/sampleService';
import { MemoryRepository } from '../../infrastructure/repositories/memory';

const repo = new SampleRepository(new MemoryRepository('sample'));
const service = new SampleService(repo);

export default (router: Router): void => {
  router.get('/load', adaptRoute(new SampleController(service)));
};
