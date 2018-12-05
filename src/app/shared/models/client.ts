import { Stateclient } from '../enums/stateclient.enum';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  id: string;
  name: string;
  email: string;
  state = Stateclient.ACTIF;

  constructor(fields?: Partial<Client>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
