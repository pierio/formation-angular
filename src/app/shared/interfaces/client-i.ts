import { Stateclient } from '../enums/stateclient.enum';

export interface ClientI {
  id: string;
  name: string;
  email: string;
  state: Stateclient;
}
