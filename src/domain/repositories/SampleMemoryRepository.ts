import { MemoryRepository } from '../../infrastructure/repositories/memory';

export class SampleRepository {
  constructor(private readonly memoryRepository: MemoryRepository) {}

  async findAll(): Promise<any> {
    return this.memoryRepository.findAll();
  }
}
