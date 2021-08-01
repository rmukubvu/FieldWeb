export class Client {
  id: string;
  name: string;
  accountNumber: string;
  address: string;
  creationDate: Date;

  public constructor(client?: Partial<Client>) {
    Object.assign(this, client);
  }
}
