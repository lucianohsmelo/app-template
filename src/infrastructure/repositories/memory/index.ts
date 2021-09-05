import { Repository } from '../repository';

export class MemoryRepository implements Repository {
  constructor(private readonly file: string) {
    this.file = file;
  }
  findAll(): () => Promise<any> {
    const data = require(`./${this.file}`).default;

    return data;
  }
}
