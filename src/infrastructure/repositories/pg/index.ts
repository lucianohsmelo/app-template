import { Repository } from '../repository';

export class PostgresRepository implements Repository {
  findAll(): () => Promise<unknown[]> {
    throw new Error('Method not implemented.');
  }
}
