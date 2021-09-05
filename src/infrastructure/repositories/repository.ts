export interface Repository {
  findAll(): () => Promise<unknown[]>;
}
