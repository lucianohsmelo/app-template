import { SampleRepository } from '../repositories/SampleMemoryRepository';

export class SampleService {
  constructor(private readonly sampleRepository: SampleRepository) {}

  async findAll() {
    return this.sampleRepository.findAll();
  }
}
